from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from model.user import User,db
from flask import session

auth_bp = Blueprint('auth', __name__)
login_manager = LoginManager()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@auth_bp.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
     # Check if the userID or username already exists
    existing_user = User.query.filter((User.userID == data['userID']) | (User.username == data['username'])).first()
    if existing_user:
        return jsonify({'error': 'UserID or Username already exists'}), 400
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    new_user = User(userID=data['userID'], username=data['username'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201
''' 
For react ALLOW COOKIES TO BE INCLUDED
 axios.post("http://127.0.0.1:5000/auth/login", 
  { username: "testuser", password: "testpassword" },
  { withCredentials: true }  // Allows cookies to be included
   )  
  .then(response => console.log(response.data));
'''
@auth_bp.route('/login', methods=['POST'])
def login_user_endpoint():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login failed'}), 401
    login_user(user)
    return jsonify({'message': 'Login successful'}), 200

@auth_bp.route('/logout', methods=['GET'])
@login_required
def logout_user_endpoint():
    session.clear()
    logout_user()
    ##Needs work
    return jsonify({'message': 'Logged out successfully'}), 200

@auth_bp.route('/protected', methods=['GET'])
@login_required
def protected_route(): # Ensures only logged-in users can access this
    return jsonify({'message': f'Hello, {current_user.username}! This is a protected route.'})

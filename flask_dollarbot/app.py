from flask import Flask, render_template, request, jsonify
from endpoints.add import add_bp
from endpoints.edit import edit_bp
from endpoints.delete import delete_bp
from endpoints.display import display_bp
# from endpoints.add_recurring import add_recurring_bp

app = Flask(__name__)
  
# Register blueprints
app.register_blueprint(add_bp, url_prefix='/add')
app.register_blueprint(edit_bp)
app.register_blueprint(delete_bp)
app.register_blueprint(display_bp, url_prefix='/display')
# app.register_blueprint(add_recurring_bp)
@app.route('/')
def home():
    return render_template('index.html')
       
if __name__ == '__main__':
    app.run(debug=True)

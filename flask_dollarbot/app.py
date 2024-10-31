from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from endpoints.add import add_bp
from endpoints.edit import edit_bp
from endpoints.delete import delete_bp
from endpoints.display import display_bp
from endpoints.category import category_bp
from sqlalchemy import inspect
# from endpoints.add_recurring import add_recurring_bp

class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)
app = Flask(__name__)


def database_exists():
    inspector = inspect(db.engine)
    return len(inspector.get_table_names()) > 0

# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"

# initialize the app with the extension
db.init_app(app)
#create tables if not created already
with app.app_context():
    if not database_exists():
            db.create_all()
  
# Register blueprints
app.register_blueprint(add_bp, url_prefix='/add')
app.register_blueprint(edit_bp)
app.register_blueprint(delete_bp)
app.register_blueprint(display_bp, url_prefix='/display')
app.register_blueprint(category_bp, url_prefix='/category')
# app.register_blueprint(add_recurring_bp)
@app.route('/')
def home():
    return render_template('index.html')
       
if __name__ == '__main__':
    app.run(debug=True)

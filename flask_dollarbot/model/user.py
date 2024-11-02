from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class User(db.Model, UserMixin):
    
    user_id = db.Column(db.String(150), primary_key=True)  # Primary key
  #  chat_id = db.Column(db.String(150), nullable=True)
    username = db.Column(db.String(150), unique=True, nullable=False)  # Unique username
    password = db.Column(db.String(150), nullable=False)

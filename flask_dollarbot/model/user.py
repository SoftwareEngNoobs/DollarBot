from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class User(db.Model, UserMixin):
    
    
    username = db.Column(db.String(150), primary_key=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """Custom user model extending Django's built-in user."""
    # Additional fields can go here if needed

class UserData(models.Model):
    """Stores user's budget and expense data in JSON format."""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user_data")
    data = models.JSONField(default=dict)  # Stores both `data` (expenses) and `budget` as JSON

    def __str__(self):
        return f"UserData for {self.user.username}"

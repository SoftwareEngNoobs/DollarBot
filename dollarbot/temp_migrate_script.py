from api.models import User, UserData
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dollarbot.settings')  # Replace 'dollarbot' with your project name
django.setup()
# Sample JSON data
json_data = {
    "864914211": {
        "data": [
            "17-May-2023,Transport,50.0",
            "11-Apr-2024,Food,400.0",
            "15-May-2024,Groceries,300.0"
        ],
        "budget": {
            "overall": "4000.0",
            "category": {
                "uncategorized": "2800.0",
                "Food": "800.0",
                "Groceries": "400.0"
            }
        }
    }
}

# Load JSON into the UserData model
for user_id, user_data in json_data.items():
    user, created = User.objects.get_or_create(username=user_id)  # Use username or modify to match your user field
    UserData.objects.update_or_create(
        user=user,
        defaults={'data': user_data}
    )

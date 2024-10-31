from flask import Blueprint, request, jsonify
import  endpoints.helper as helper
from datetime import datetime


add_bp = Blueprint('add', __name__)


def validate_add_request(chat_id, expense_date, expense_amount, expense_category):
    if not chat_id or not expense_date or not expense_category or not expense_amount:
        return False
    if datetime.strptime(expense_date, '%Y-%m-%d').today().date() > datetime.today().date():
        return False 
    if expense_category not in helper.get_spend_categories():
        return False
    if helper.validate_entered_amount(expense_amount) == 0:
        return False 
    return True 

@add_bp.route('/add_single', methods=['POST'])
def add_single():
    """
    Add a single expense record. 
    
    Request JSON format:
    {
        "user_id" : "864914211",
        "amount" : "25.0",
        "date" : "17-May-2023",
        "category" : "Grocery"
        "currency" : "$"
    }

    Response  JSON format: 
    {
       "Expense record created succesfully"
    }
    """
    data = request.get_json()
    user_id = data['user_id']
    expense_date = data['date']
    expense_category = data['category']
    expense_amount = data['amount']
    expense_currency = str(data['currency'])

    if not validate_add_request(user_id, expense_date, expense_amount, expense_category):
        return jsonify({'error': 'Bad Request'}), 400
    

    date_str, category_str, amount_str = (
        expense_date,
        str(expense_category),
        str(expense_amount),
    )
    user_list = helper.read_json()
    if str(user_id) not in user_list:
        user_list[str(user_id)] = helper.create_new_user_record()
    user_list[str(user_id)]["data"].append("{},{},{}, {}".format(date_str, category_str, amount_str, expense_currency))
    helper.write_json(user_list)
    return jsonify({'message': 'Expense record created successfully'}), 200
    

from flask import Blueprint, request, jsonify
import  endpoints.helper as helper

display_bp = Blueprint('display', __name__)


@display_bp.route('/{}', methods=['GET'])
def display_user_expense_history():
    """
        Display all expenses of a given user.

        
    """
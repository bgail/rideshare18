How to run this application:
1. source venv/bin/activate
2. pip install requirements.txt
3. export FLASK_APP=main.py
4. flask run


Making changes in the model:
1. flask db migrate -m "message"
2. flask db upgrade
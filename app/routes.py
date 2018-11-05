from app import app
from app import db
from app.models import User, Post

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

# this has to be modified to take in user name.
@app.route('/addNewUser')
def addNewUser():
    u = User(username='john2', email='john2@example.com')
    db.session.add(u)
    db.session.commit()
    users = User.query.all()
    for u in users:
        print(u.id, u.username)
    return "Yay! Success!"
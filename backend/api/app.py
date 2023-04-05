from flask import Flask
from flask_sqlalchemy import SQLAlchemy

api = Flask(__name__)
api.secret_key = "mySecretKey"
api.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///counter.db"
db = SQLAlchemy(api)

# create model
class Counter(db.Model):
    identifier = db.Column(db.Integer, primary_key=True)
    currentCount = db.Column(db.Integer, nullable=False)


@api.route('/create-db', methods=['GET','POST'])
def createDB():
    db.create_all()
    return "Done"

@api.route('/')
@api.route('/hello')
def Hello():
    return "Hello!"

@api.route('/score/<int:marks>')
def Score(marks):
    return "Your score is: " + str(marks)

if __name__ == "__main__":
    api.run()

from flask import Flask, request, Response, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

api = Flask(__name__)
api.secret_key = "mySecretKey"
api.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///counter.db"

CORS(api)
db = SQLAlchemy(api)
# create database

# create database model
class Counter(db.Model):
    identifier = db.Column(db.Integer, primary_key=True)
    currentCount = db.Column(db.Integer, nullable=False)

@api.route('/create-db')
def create():
    try:
        db.create_all()
        return "Hey, your database is now created"
    except:
        return "Sorry, your database could not be created"

@api.route('/write-db', methods=['GET','POST'])
def add():
    if request.method=="GET":
        return render_template('write-db.html')
    elif request.method=="POST":
        ctr = request.form['counter'] #5
        record = Counter(identifier=123, currentCount = ctr)
        db.session.add(record)
        db.session.commit()
        return "Okay, your value was inserted into the database"

@api.route('/view-db')
def view():
    ctr = Counter.query.filter_by(identifier=123).all()
    print(ctr[0].currentCount)
    return "Hey, the current value in your database is: " + str(ctr[0].currentCount)

@api.route('/get-counter')
def getCounter():
    ctr = Counter.query.filter_by(identifier=123).all()
    result = {"counter": ctr[0].currentCount}
    return jsonify(result)

@api.route('/increment-counter', methods=['POST'])
def increment():
    try:
        ctr = Counter.query.filter_by(identifier=123).all()
        ctr[0].currentCount = ctr[0].currentCount + 1
        db.session.commit()
        return Response(status=201)
    except:
        return Response(status=400)

@api.route('/decrement-counter', methods=['POST'])
def decrement():
    try:
        ctr = Counter.query.filter_by(identifier=123).all()
        ctr[0].currentCount = ctr[0].currentCount - 1
        db.session.commit()
        return Response(status=201)
    except:
        return Response(status=400)

@api.route('/')
@api.route('/home')
@api.route('/home/showHome')
def Home():
    return "Okay, you have reached our backend server"

#Even or odd using Dynamic Routes
@api.route('/dynamic-route/<int:num>')
def dynamic(num):
    if num%2==0:
        return "You have reached a even number"
    else:
        return "You have reached an odd number"

if __name__ == "__main__":
    api.run()

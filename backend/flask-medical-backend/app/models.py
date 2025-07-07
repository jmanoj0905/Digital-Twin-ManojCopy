from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserRecord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    medical_history = db.Column(db.Text, nullable=True)
    conditions = db.Column(db.String(200), nullable=True)
    affected_organs = db.Column(db.String(200), nullable=True)

    def __repr__(self):
        return f'<UserRecord {self.name}, Age: {self.age}>'

class Medication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    effects = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f'<Medication {self.name}>'

class Surgery(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f'<Surgery {self.name}>'
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object('config.Config')
    db.init_app(app)

    from app.routes import app_routes  # Import the blueprint
    app.register_blueprint(app_routes) # Register the blueprint

    from app import models  # Import models if needed

    return app
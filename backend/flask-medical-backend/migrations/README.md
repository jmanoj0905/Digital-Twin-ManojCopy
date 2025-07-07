# This file provides documentation related to database migrations, explaining how to manage schema changes.

# Migrations in this project are managed using Flask-Migrate, which is an extension that handles SQLAlchemy database migrations for Flask applications.

# To initialize the migration environment, run the following command:
# flask db init

# To create a new migration after making changes to the models, use:
# flask db migrate -m "Description of changes"

# To apply the migration to the database, run:
# flask db upgrade

# To downgrade the database to a previous migration, use:
# flask db downgrade

# Ensure that you have the necessary database configurations set in config.py before running migrations.

# For more detailed information on using Flask-Migrate, refer to the official documentation:
# https://flask-migrate.readthedocs.io/en/latest/
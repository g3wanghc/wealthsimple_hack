from flask import render_template
from flask import g

from app import app

import sqlite3
import yaml

DATABASE = 'database.db'

USER_TOKENS = []
TEAM_TOKENS = []

with open('/secrets.yaml', 'r') as stream:
    try:
        print(yaml.load(stream))
    except yaml.YAMLError as exc:
        print(exc)

# -------------------------------------------------------------------

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

# import app
# app.routes.init_db()

def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

    print("database initialized")

# -------------------------------------------------------------------

@app.route('/')
def index():
    return render_template('index.html')

# user related functions - assuming team assognments are hardcoded 
# @app.route('/api/user/login')
# @app.route('/api/user/logout')

# user interactions 
# @app.route('/api/user/vote_portfolio')
# @app.route('/api/user/increment')
# @app.route('/api/user/decrement')

# wealthsimple bank account related operations
# @app.route('/api/team/increment') #come up with function later
# @app.route('/api/team/decrement') #come up with function later
# @app.route('/api/team/set_portfolio')
# @app.route('/api/team/run_lottery') #idk


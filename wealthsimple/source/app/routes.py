from flask import render_template
from flask import g

from app import app

import sqlite3

DATABASE = 'database.db'

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

    print("hello world")

# -------------------------------------------------------------------

@app.route('/')
def index():
    return render_template('index.html')

# user related functions - assuming team assognments are hardcoded 
# @app.route('/api/user/login')
# @app.route('/api/user/logout')

# wealthsimple bank account related operations
# @app.route('/api/team/increment')
# @app.route('/api/team/decrement')
# @app.route('/api/team/get_position') 
# @app.route('/api/team/get_portfolios')
# @app.route('/api/team/set_portfolio')
# @app.route('/api/team/members')
# @app.route('/api/team/run_lottery')

# user interactions 
# @app.route('/api/user/get_position')
# @app.route('/api/user/vote_portfolio')
# @app.route('/api/user/increment')
# @app.route('/api/user/decrement')


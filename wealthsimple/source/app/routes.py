from flask import render_template
from flask import g

from app import app

import sqlite3

DATABASE = 'database.db'

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

def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

@app.route('/')
def index():
    temp_user = {'username': 'Micro'}
    return render_template('index.html')

# @app.route('/api/user/login')
# @app.route('/api/user/logout')

# @app.route('/api/account/increment')
# @app.route('/api/account/decrement')
# @app.route('/api/account/get_position')
# @app.route('/api/account/get_portfolios')
# @app.route('/api/account/set_portfolio')

# @app.route('/api/user/get_teams')
# @app.route('/api/user/vote_portfolio')

# @app.route('/api/team/run_lottery')

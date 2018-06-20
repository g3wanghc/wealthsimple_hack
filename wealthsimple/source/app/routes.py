from flask import Flask
from flask import g
from flask import render_template
from flask import request

from app import app

import atexit
import json
import requests
import sqlite3
import yaml

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger

from secrets import token_hex

flask_app = Flask(__name__)

DATABASE = 'database.db'

USER_TOKENS = {}
TEAM_TOKENS = {}
SESSION_TOKENS = {}

# -------------------------------------------------------------------

# Configurations
with open('secrets.yaml', 'r') as stream:
    try:
        secrets = yaml.load(stream)
        CLIENT_ID = secrets['client_id']
        CLIENT_SECRET = secrets['client_secret']
        TOK_EXT_URL = secrets['token_exchange_url']
        print("credentials acquired")
    except yaml.YAMLError as exc:
        print(exc)

# -------------------------------------------------------------------

# Database
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
    print("database initialized")

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

# initialize testing DB
init_db()

# -------------------------------------------------------------------

# Access Tokens, Auth
def password_grant_tok_exch(username, password, client_id = CLIENT_ID, client_secret = CLIENT_SECRET, scope = 'read write'):

    payload = {
        'grant_type': 'password',
        'username': username,
        'password': password,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'scope': scope
    }

    response = requests.request("POST", TOK_EXT_URL, data=payload)
    json_data = json.loads(response.text)
    access_token = json_data['access_token']

    return access_token

with app.app_context():
    for username, password in query_db('select username, password from users'):
        USER_TOKENS[username] = password_grant_tok_exch(username = username, password = password)
    print('users access tokens acquired')

    for username, password in query_db('select username, password from teams'):
        TEAM_TOKENS[username] = password_grant_tok_exch(username = username, password = password)
    print('teams access tokens acquired')
    
# Dump access lokens to log 
print(USER_TOKENS)
print(TEAM_TOKENS)

# -------------------------------------------------------------------

# Tasks

def run_lottery():
    # TODO
    print('run lottery')

def pick_portfolio():
    # TODO
    print('pick portfolio')

scheduler = BackgroundScheduler()
scheduler.start()

scheduler.add_job(
    func=run_lottery,
    trigger=IntervalTrigger(days=1),
    id='lottery_script',
    name='Run the daily lottery on registered teams',
    replace_existing=True)

scheduler.add_job(
    func=pick_portfolio,
    trigger=IntervalTrigger(days=7),
    id='portfolio_script',
    name='Pick the new target/portfolio for the teams',
    replace_existing=True)

atexit.register(lambda: scheduler.shutdown())

# -------------------------------------------------------------------

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/user/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    __password = query_db('select password from users where username = ?', [username], one=True)

    if __password and password == __password[0] and username:
        session_token = token_hex(16)
        content = str({
            'session_token': session_token
            })
        # only the last session will be active
        SESSION_TOKENS[username] = session_token
        response = app.response_class(response=content, status=200)
    else:
        response = app.response_class(response='Error', status=400)
    return response

@app.route('/api/user/logout', methods=['POST'])
def logout():
    username = request.form['username']
    session_token = request.form['session_token']

    if username in SESSION_TOKENS and SESSION_TOKENS[username] == session_token:
        del SESSION_TOKENS[username]
        response = app.response_class(response='Ok', status=200)
    else:
        response = app.response_class(response='Error', status=400)
    return response

# @app.route('/api/user/position')
# retrieve historical positions and user information

# @app.route('/api/user/update')
# vote on the team's question-portfolio-category and question-risk-comfortability

# @app.route('/api/user/increment')
# deposit personal account 

# @app.route('/api/user/decrement')
# remove money to personal account 

# wealthsimple bank account related operations
# @app.route('/api/team/increment')
# deposit team account

# @app.route('/api/team/decrement') #come up with function later
# withdrawal team account

# @app.route('/api/team/lottery')
# enable/disable lottery settings

# @app.route('/api/team/position')
# retrieve historical positions

# @app.route('/api/team/transactions')
# retrieve historical transactions

from flask import g
from flask import render_template
from flask import request

from app import app

import json
import requests
import sqlite3
import yaml

DATABASE = 'database.db'

USER_TOKENS = {}
TEAM_TOKENS = {}

# -------------------------------------------------------------------

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
    
# -------------------------------------------------------------------

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/user/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    __password = query_db('select password from users where username = ?', [username], one=True)

    if __password and password == __password[0]:
        response = app.response_class(response='True', status=200)
    else:
        response = app.response_class(response='False', status=400)
    return response

# user interactions 
# @app.route('/api/user/vote_portfolio')
# @app.route('/api/user/increment')
# @app.route('/api/user/decrement')

# wealthsimple bank account related operations
# @app.route('/api/team/increment') #come up with function later
# @app.route('/api/team/decrement') #come up with function later
# @app.route('/api/team/set_portfolio')
# @app.route('/api/team/run_lottery') #idk


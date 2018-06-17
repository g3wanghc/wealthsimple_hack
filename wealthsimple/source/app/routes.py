from flask import render_template
from flask import g

from app import app

import sqlite3

DATABASE = 'database.db'

TOKEN = 'access token'
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
before_first_request
    def __init__(self, credentials):

        """Constructor for the class, only parameter is the credentials
        that Ross gave us in the form of a dictionary
        """
        self.credentials = {
            "uid":"971db3014fa95ac88451344e51b0283d5f0aed001c3568bfaff18419a2b36464",
            "secret":"5d77ba6b791f5f00d96ce32c47188b06447e36c1045134561070d40c0fea2880",
            "redirect_uri":"http://localhost:3000/callback",
            "url": "https://staging.wealthsimple.com/oauth/authorize?client_id=#{APPLICATION_ID}&redirect_uri=#{REDIRECT_URI}&response_type=#{response_type}&scope=#{scope}&state=#{state}",
            "scopes": "read"
        }

    def generate_url_with_params(self, url: str, params: dict):
        """This will use urllib to append the parameters to the end of the url
        code from: https://stackoverflow.com/questions/2506379/add-params-to-given-url-in-python

        url - the url of interest
        params - a dictionary of the parameters to be appended
        returns - a string containing the modified url
        """
        url_parts = list(urllib.parse.urlparse(url))
        query = dict(urllib.parse.parse_qsl(url_parts[4]))
        query.update(params)
        url_parts[4] = urllib.parse.urlencode(query)
        url_with_params = urllib.parse.urlunparse(url_parts)
        return url_with_params

    def get_user_auth_url(self):
        """Getting the authorization_code (aka authorization grant) requires
        approving access for another user to take your account information
        which you must do manually in the browser (might be able to automate
        using Selenium to interact with the webpage, but too much work for now)

        returns - a string containing the url to approve access to the account
                  and get the authorization code
        """
        APPLICATION_ID = self.credentials['uid']
        REDIRECT_URI = self.credentials['redirect_uri']#[0]
        response_type = 'code'
        scope = self.credentials['scopes']#[0]
        state = 'gamma'

        user_auth_url = "https://staging.wealthsimple.com/oauth/authorize"
        user_auth_params = {'client_id': APPLICATION_ID,
                            'redirect_uri': REDIRECT_URI,
                            'response_type': response_type,
                            'scope': scope,
                            'state': state
                            }

        user_auth_url_params = self.generate_url_with_params(user_auth_url,
                                                             user_auth_params
                                                             )
        # open this address in your browser of choice
        print(user_auth_url_params)
        #code = input("After logging into the above URL and authorizing, what's the key after 'code=' and before '&' in the URL? ")
        #return code


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


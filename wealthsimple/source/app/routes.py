from flask import render_template
from flask import g

from app import app

import sqlite3

DATABASE = 'database.db'

CREDENTIALS = { #INFORMATION NEEDED TO CREATE THE WEB APP
    "uid":"971db3014fa95ac88451344e51b0283d5f0aed001c3568bfaff18419a2b36464",
    "secret":"5d77ba6b791f5f00d96ce32c47188b06447e36c1045134561070d40c0fea2880",
    "redirect_uri":"http://localhost:3000/callback",
    "url": "https://staging.wealthsimple.com/oauth/authorize?client_id=#{APPLICATION_ID}&redirect_uri=#{REDIRECT_URI}&response_type=#{response_type}&scope=#{scope}&state=#{state}",
    "scopes": "read write"
}

USER_TOKENS = []
TEAM_TOKENS = []


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
# @app.before_first_request

def generate_url_with_params(self, url: str, params: dict): #THIS FUNCTION WILL GENERATE A URL FROM VARIABLE INFORMATION; TAKEN FROM STACKOVERFLOW
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

def get_user_auth_url(self): #THIS FUNCTION GENERATES THE URL AND PRINTS IT. NORMALLY THIS WOULD BE TYPED INTO COMMAND BAR AND EXCECUTED FOR ACCESS GRANTING, BUT FOR PURPOSE OF COMPETITION, WE WILL ASSUME THAT ACCESS IS ALREADY GRANTED AND WORK WITH THE CODE
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

def token_exchange(self, _authorization_code: str): #THIS CHANGES THE URL FOR THE ACCESS TOKEN
        """Exhange the authorization_code received earlier for an access token from
        the authorization server

        returns - a string containing the access token
        """
        APPLICATION_ID = self.credentials['uid']
        APPLICATION_SECRET = self.credentials['secret']
        REDIRECT_URI = self.credentials['redirect_uri']#[0]
        grant_type = 'authorization_code'#self.credentials['integration_policy']['authentication']#[0]
        _authorization_code = #this is a string; in the url it should be the list of characters before "&state=gamma"

        token_exchange_url = "https://api.sandbox.wealthsimple.com/v1/oauth/token"
        token_exchange_params = {'client_id': APPLICATION_ID,
                                 'client_secret': APPLICATION_SECRET,
                                 'grant_type': grant_type,
                                 'redirect_uri': REDIRECT_URI,
                                 'code': 'a5a218fc040546e83b8c15acc31fd10b94f535477e6f31338df22925e52889c8'
                                 }
        token_exchange_url_params = self.generate_url_with_params(token_exchange_url,
                                                                  token_exchange_params
                                                                  )
        response = requests.post(token_exchange_url_params)
        json_data = json.loads(response.text)
        access_token = json_data['access_token']
        print('access token is: ' + access_token) #GENERATES AND PRINTS THE ACCESS TOKEN
        return access_token

    def get_data(self, endpoint: str): #THIS FUNCTION POSTS THE ACCESS TOKEN AND SPECIFIC API REQUEST, AND GETS INFORMATION BACK IN THE FORM OF A JSON FILE
        """Get data from the endpoint specified
        
        returns - json from API
        """
        # After you run this once you can comment this out and replace access_token
        # with the actual key to save typing it in every time
        authorization_code = self.get_user_auth_url() #if no access token, this should be running so that it can get the information. After it is run once, this can be commented out, however for the purpose of the demo it shouldn't be a problem given the 7200 second allowance

        # Now swap this authorization code for an access token
        access_token = self.token_exchange(authorization_code) #This is the access token information. The first time this is ran, the script should be left as is. If the access token is generated, comment out this expression and make a string with the access token

        # Use access_token to get information from the server
        # Instead of -H in the URL like the documentation show python appends headers
        # using a dictionary
        headers = {'Authorization': 'Bearer %s' % access_token} #POSTS THE ACCESS TOKEN IN THE END POINT
        response = requests.get("https://api.sandbox.wealthsimple.com/v1/%s" % endpoint,
                                headers=headers)
        pprint('Response: ' + response.text)

# App developers credentials
creds = {
         "application": {
             "name": "arash",
             "redirect_uri": ["http://localhost:3000/callback_uri"], #CHANGE THIS TO WHATEVER REDIRECT IS BEING USED
             "scopes": ["read"],
             "confidential": 'true',
             "application_family_id": 'null',
             "integration_policy": {
               "api_version": "v1",
               "authentication": ["authorization_code", "refresh"],
               "version": "v1"
             }
           }
         }
data_getter = HelloController(creds) #THIS CALLS THE "HELLO CONTROLLER" WHICH GETS INFO FROM THE WS API.
# Replace 'users' with whichever endpoint you want to call
#data_getter.get_data('bank_accounts') #THIS IS THE DATA THAT WILL BE DISPLAYED IN THE JSON FILE. FOR THIS CASE, IT IS BANK ACCOUNTS
#jsonToPython = json.loads(jsonData)
#disp(jsonData)

#positions = securities in the system (hold stuff like assets; stocks, mutual funds etc.)
@app.route('/')
def index():
    return render_template('index.html')

# user related functions - assuming team assognments are hardcoded 
# @app.route('/api/user/login')
# @app.route('/api/user/logout')

# wealthsimple bank account related operations
#THE FOLLOWING ARE THE ENDPOINTS FOR THE FLASK AND WEALTHSIMPLE API.
data_getter.get_data('accounts/accounts_id') #gets information on the accounts, types, currency, position etc.
# @app.route('/api/team/increment') #come up with function later
# @app.route('/api/team/decrement') #come up with function later
data_getter.get_data('positions') #gets financial positions 
data_getter.get_data('account_assignments') #gets the portfolio information of a user
# @app.route('/api/team/set_portfolio')
data_getter.get_data('users') #pulls information on the users including id, email etc.
# @app.route('/api/team/run_lottery') #idk
data_getter.get_data('survey_responses') #gets information on survey results and postion etc.

# user interactions 
data_getter.get_data('positions') #gets financial positions --> use for team profile
# @app.route('/api/user/vote_portfolio')
# @app.route('/api/user/increment')
# @app.route('/api/user/decrement')


from flask import render_template
from app import app

@app.route('/')
def index():
    temp_user = {'username': 'Micro'}
    return render_template('index.html', user=temp_user)
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from datetime import datetime
import base64
import os

app = Flask(__name__, template_folder='templates', static_folder='static')
port = 3000

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/ticket', methods=['POST'])
def ticket():
    full_name = request.form.get('fullName')
    email = request.form.get('email')
    github_username = request.form.get('githubUsername')
    
    file = request.files['fileUpload']
    file_content = file.read()
    mime_type = file.mimetype
    base64_encoded = base64.b64encode(file_content).decode('utf-8')
    src = f'data:{mime_type};base64,{base64_encoded}'
    
    current_date = datetime.now()
    formatted_date = current_date.strftime('%b %d, %Y')
    
    return render_template('ticket.html', 
                         fullName=full_name,
                         email=email,
                         githubUsername=github_username,
                         src=src,
                         date=formatted_date)

if __name__ == '__main__':
    app.run(port=port, debug=True)
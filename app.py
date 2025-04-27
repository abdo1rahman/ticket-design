from flask import render_template, Flask, request as req

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
  render_template('main.html')
  
@app.route('/ticket', methods=['GET', 'POST'])
def ticket():
  full_name = req.fullName
  email = req.email
  github_username = req.githubUsername
  
  #todo: deal with the file input
  
  render_template('ticket.html')
  #todo: review flask and django
  
  


if app.name == "__main__":
  app.run()
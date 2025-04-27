from flask import render_template, Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
  render_template('main.html')
  
@app.route('/ticket', methods=['GET', 'POST'])
def ticket():
  pass
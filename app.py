from flask import Flask, render_template
import os

app = Flask(__name__, static_folder='static')

@app.route('/')
def home():
    return render_template('index.html', title='Slovenian Language Cheatsheet for A2 Learners')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)

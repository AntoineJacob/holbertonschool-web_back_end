#!/usr/bin/env python3
"""Flask-Babel app"""

from flask import Flask, render_template
app = Flask(__name__)


@app.route("/", methods=["GET"], strict_slashes=False)
def hello_World():
    """return the index.html"""
    return render_template('0.index.html')


if __name__ == '__main__':
    app.run()

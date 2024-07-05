#!/usr/bin/env python3

""" Module for trying out Babel i18n """

from flask import Flask, render_template, Babel

app = Flask(__name__, template_folder='templates')
babel = Babel(app)


@app.route('/', methods=['GET'], strict_slashes=False)
def hello_world() -> str:
    """Renders a Basic Template for Babel Implementation"""
    return render_template("0-index.html")


class Config(object):
    """ Configuration Class for Babel """

    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)


if __name__ == "__main__":
    app.run()

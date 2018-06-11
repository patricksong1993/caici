#!/usr/bin/python
#coding:utf-8

from flask import Flask, render_template, request, json
import connector as conn
from random import shuffle
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/game')
def game():
    category = request.args.get('category')
    words = conn.get_items(category)
    words = words.split(',');
    shuffle(words);
    words = ','.join(words)
    return render_template('game.html', items=json.dumps(words, ensure_ascii=False))


if __name__ ==  '__main__':
    app.run()

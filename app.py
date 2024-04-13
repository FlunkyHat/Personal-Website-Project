from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/animation')
def animation():
    return render_template('tech/animation.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/css')
def css():
    return render_template('tech/css.html')


@app.route('/demo1')
def demo1():
    return render_template('tech/demo1.html')


@app.route('/demo2')
def demo2():
    return render_template('tech/demo2.html')


@app.route('/frameworks')
def frameworks():
    return render_template('tech/frameworks.html')


@app.route('/html')
def html():
    return render_template('tech/html.html')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/javascript')
def javascript():
    return render_template('javascript.html')


@app.route('/music')
def music():
    return render_template('music.html')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')


@app.route('/responsive-design')
def responsive_design():
    return render_template('tech/responsive-design.html')


@app.route('/tech')
def tech():
    return render_template('tech.html')


@app.route('/video_games')
def video_games():
    return render_template('video_games.html')


if __name__ == '__main__':
    app.run(debug=True)

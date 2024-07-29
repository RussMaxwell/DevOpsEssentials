from flask import Flask, send_from_directory
import subprocess
import os

app = Flask(__name__, static_folder='build', static_url_path='')


@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':

    react_app_path = 'clientapp'

    try:
        os.system(f'cd {react_app_path} && npm install')
        print("npm install good")

        os.system(f'cd {react_app_path} && npm run build')
        print("npm build good")

    except FileNotFoundError:
        print(react_app_path)
        print("npm not found")

    # Start the Flask app
    app.run(debug=True)

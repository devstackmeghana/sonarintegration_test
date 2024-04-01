from flask import Flask
from sonarqube import fetch_sonar_results

app = Flask(__name__)
# Code duplication
def duplicate_code():
    print("Hello, World!")
    print("Hello, World!")

@app.route('/')
def display_sonar_results():
    try:
        # Fetch SonarQube results
        results = fetch_sonar_results()
        return str(results)
    except Exception as e:
        return f'Error fetching SonarQube results: {str(e)}'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

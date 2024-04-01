import requests

# Define SonarQube URL and credentials
SONARQUBE_URL = 'http://localhost:9000/api/issues/search'
SONARQUBE_ADMIN_USERNAME = 'admin'
SONARQUBE_ADMIN_PASSWORD = 'Dhanush22@'
PROJECT_KEY = 'sonarintegration_python'

def fetch_sonar_results():
    try:
        # Make GET request to SonarQube API
        response = requests.get(SONARQUBE_URL, params={'componentKeys': PROJECT_KEY, 'resolved': "false"}, auth=(SONARQUBE_ADMIN_USERNAME, SONARQUBE_ADMIN_PASSWORD))
        response.raise_for_status()  # Raise exception for non-2xx status codes
        return response.json()  # Parse JSON response
    except requests.exceptions.RequestException as e:
        print(f'Error fetching SonarQube results: {e}')
        raise

# Example usage
if __name__ == '__main__':
    try:
        results = fetch_sonar_results()
        print(results)
    except Exception as e:
        print(f'Error: {e}')

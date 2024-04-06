fn main() {
    println!("Hello, world!");
}
use reqwest::blocking::Client;
use reqwest::Error;

const SONARQUBE_URL: &str = "http://localhost:9000/api/issues/search";
const SONARQUBE_ADMIN_USERNAME: &str = "admin";
const SONARQUBE_ADMIN_PASSWORD: &str = "Dhanush22@";
const PROJECT_KEY: &str = "sonarintegration_rust";

fn fetch_sonar_results() -> Result<String, Error> {
    let client = Client::new();
    let response = client
        .get(SONARQUBE_URL)
        .query(&[("componentKeys", PROJECT_KEY), ("resolved", "false")])
        .basic_auth(SONARQUBE_ADMIN_USERNAME, Some(SONARQUBE_ADMIN_PASSWORD))
        .send()?;
    
    // Ensure that the request was successful (status code 200)
    if response.status().is_success() {
        let body = response.text()?;
        Ok(body)
    } else {
        Err(Error::new(reqwest::StatusCode::from_u16(response.status().as_u16()).unwrap()))
    }
}

fn main() {
    match fetch_sonar_results() {
        Ok(results) => println!("SonarQube results: {}", results),
        Err(err) => eprintln!("Error fetching SonarQube results: {}", err),
    }
}

// sonarqube.js
const axios = require('axios');
const SONARQUBE_URL = 'http://localhost:9000/api/issues/search';
const SONARQUBE_ADMIN_USERNAME = "admin";
const SONARQUBE_ADMIN_PASSWORD = 'Dhanush22@'
const PROJECT_KEY = 'sonarintegration_node';
async function fetchSonarResults() {



    try {

        const response = await axios.get(SONARQUBE_URL, {
            params: {
                componentKeys: PROJECT_KEY,
                resolved: false
            },
            auth: {
                username: SONARQUBE_ADMIN_USERNAME,
                password: SONARQUBE_ADMIN_PASSWORD
            }
        });
        // console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(`Error fetching SonarQube results: ${error}`)
        throw new Error(`Error fetching SonarQube results: ${error}`);
    }
}



module.exports = { fetchSonarResults };

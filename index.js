// index.js
const express = require('express');
const { fetchSonarResults } = require('./sonarqube');

const app = express();
const PORT = 3010;


app.get('/', async (req, res) => {
    try {
        const results = await fetchSonarResults();
        // console.log(results ,'..........................issues')
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
fetchSonarResults();
// app.get('/', async (req, res) => {
//     try {
//         const results = await fetchSonarResults();
//         console.log(results ,'..........................issues')
//         res.json(results);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

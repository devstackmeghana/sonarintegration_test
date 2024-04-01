'use strict';
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

// Function to retrieve environment variables
module.exports = function (env) {
    console.log(process.env,'...............fomm env file');
    return process.env[env];
};

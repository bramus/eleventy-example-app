const dotenv = require('dotenv');
const fs = require('fs');

const config = dotenv.parse(fs.readFileSync('.env', 'utf8'));

module.exports = config;
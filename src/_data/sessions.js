// import fetch from 'node-fetch';
// `SyntaxError` was thrown:
// Cannot use import statement outside a module

// const fetch = require('node-fetch');
// `Error` was thrown:
// Error [ERR_REQUIRE_ESM]: require() of ES Module x from y not supported.
// Instead change the require of index.js in x to a dynamic import() which is available in all CommonJS modules.

// @ref https://github.com/node-fetch/node-fetch#loading-and-configuring-the-module
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async () => {
    const res = await fetch(`${process.env.API_BASEURL}/event/2018`);
    const sessions = await res.json();

    return sessions;
};
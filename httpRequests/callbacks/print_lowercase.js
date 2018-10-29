const https = require('https');
const getHTML = require('../module.js');
const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};
const printLower = html => {
    console.log(html.toLowerCase());
}

getHTML.getHTML(requestOptions, printLower);
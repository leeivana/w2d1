const https = require('https');
const getHTML = require('../module.js');
const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};
const printUpper = html => {
    console.log(html.toUpperCase());
}
getHTML.getHTML(requestOptions, printUpper);
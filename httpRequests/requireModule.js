const https = require('https');
const getHTML = require('./module.js');
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

console.log(getHTML.getHTML(requestOptions, getHTML.printHTML));

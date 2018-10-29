const https = require('https');
const getHTML = require('../module.js');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

const printReverse = html => {
  console.log(html.split('').reverse().join(''));
}

getHTML.getHTML(requestOptions, printReverse);
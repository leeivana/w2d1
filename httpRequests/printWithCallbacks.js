const https = require('https');

function getHTML(options, callback){
  let allData;
  https.get(options, response => {
    response.on('data', (data) => {
      allData += (data + '\n');
      callback(allData);
    });
  });
}

function printHTML(html){
  console.log(html);
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML);
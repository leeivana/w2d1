const https = require('https');

function getAndPrintHTML (options) {
  https.get(options, response => {
    let allData;
    response.on('data', (data) => {
      allData += (data + '\n');
      console.log(allData);
    });
  });
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
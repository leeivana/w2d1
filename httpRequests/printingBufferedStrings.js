const https = require('https');

function getAndPrintHTML(){
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }

  https.get(requestOptions, response => {
    let allData = '';
    response.on('data', (data) => {
      allData += (data + '\n');
    });
    response.on('end', () => {
      console.log(allData);
    });
  });
}
getAndPrintHTML();
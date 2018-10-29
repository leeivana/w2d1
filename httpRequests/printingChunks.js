const https = require('https');

function getAndPrintHTMLChunks() {
  const requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
  };

  https.get(requestOptions, response => {
      response.on('data', (data) => {
          console.log(data + '\n');
      });
      response.on('end', () => {
          console.log('Response stream finished');
      });

  });
}

getAndPrintHTMLChunks();
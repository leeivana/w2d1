const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    throw err;
  })
  .on('response', (response) => {
    console.log(`Response Status Code: ${response.statusCode}`);
    console.log(`Response Status Message: ${response.statusMessage}`);
    console.log(`Content Type: ${response.headers['content-type']}`);
    console.log('Downloading Image...');
  })
  .on('end', () => {
    console.log('Download Complete');
  })
  .pipe(fs.createWriteStream('./future.jpg'));


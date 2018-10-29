const https = require('https');
module.exports = {
    getHTML: (options, callback) => {
        let allData = '';
        https.get(options, response => {
            response.on('data', (data) => {
                allData += (data + '\n');
            });
            response.on('end', () =>{
                callback(allData);
            })
        });
    }
}
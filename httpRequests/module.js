const https = require('https');
module.exports = {
    getHTML: function(options, callback) {
        let allData;
        https.get(options, response => {
            response.on('data', (data) => {
                allData += (data + '\n');
                callback(allData);
            });
        });
    },
    printHTML: html => {
        console.log(html);
    }
}
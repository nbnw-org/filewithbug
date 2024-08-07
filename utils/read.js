const fs = require('fs');

function readJSONFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
  
      try {
        const jsonData = JSON.parse(data);
        callback(null, jsonData);
      } catch (err) {
        callback(err, null);
      }
    });
  }

  module.exports = {readJSONFile}
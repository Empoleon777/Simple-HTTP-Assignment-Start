const spongegarURL = './client/spongegar.png';
const fs = require('fs');

const getSpongegar = (request, response) => {
  fs.readFile(spongegarURL, (err, data) => {
    if (err) {
      console.error(err);
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Internal Server Error');
    } else {
      const contentType = 'image/jpeg'; // Change this to 'image/png' if your image is in PNG format
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(data);
    }
  });
};

module.exports = { getSpongegar };

const express = require('express');
const path = require('path');

const app = express();

/*eslint-disable no-console*/

// Serve static files from the React app
const location = __dirname + '/dist';
app.use('/', express.static(location));

app.get('*', function(request, response, next) {
  response.sendfile(__dirname + '/dist/index.html');
});

const port = 4000;
app.listen(port, function() {
    console.log(`Internet Famous listening on ${port} from ${location}`);
});

const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const helper = require('../helpers/github.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(parser.json());
app.use(morgan('dev'));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.term;
  var data;
  var data = helper.getReposByUsername(username, (err, results, body) => {
    repos = JSON.parse(body);
    
    res.end();
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


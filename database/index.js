const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userID: String,
  username: String,
  forks: String,
  creationDate: String,
  repoLink: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = ({userID, username, forks, creationDate, repoLink}) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
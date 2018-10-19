const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher'); //put in Heroku address
mongoose.connect('mongodb://heroku_06tl7rnj:2bc3l00po2llq234r4mk0lhcbt@ds137283.mlab.com:37283/heroku_06tl7rnj');

let repoSchema = mongoose.Schema({
  repoID: {type: String, unique: true},
  repoName: String,
  username: String,
  forks: String,
  creationDate: String,
  repoLink: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = ({repoID, repoName, username, forks, creationDate, link}) => {
  var repo = new Repo({repoID: repoID, repoName: repoName, username: username, forks: forks, creationDate: creationDate, repoLink: link});
  repo.save((err, repo) => {
    if (err) {
      console.log(err);
    }
  });
}

let compareDates = (repo1, repo2) => {
  var a = Number(repo1.creationDate.split('-').join(''))
  var b = Number(repo2.creationDate.split('-').join(''))
  return b-a;
}

let retrieve = (cb) => {
  Repo.find((err, repos) => {
    repos.sort(compareDates);
    var targetRepos = repos.slice(0, 25)
    cb(targetRepos);
  });
}

module.exports.save = save;
module.exports.retrieve = retrieve;
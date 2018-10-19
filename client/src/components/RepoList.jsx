import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
    </div>
    <ol>
      {props.repos.map((repo, i) => {
        return (
          <Repo repo={repo} key={i} index={i+1} />
        )
      })}
    </ol>
  </div>
)

export default RepoList;
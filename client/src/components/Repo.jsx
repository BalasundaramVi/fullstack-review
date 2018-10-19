import React from 'react';

const Repo = (props) => {
  return (
    <div className='repo'>
      <span className='list index'><b>{props.index}. </b></span>
      <span className='repoID'><b>ID:</b> {props.repo.repoID}</span>
      <span className='repoName'> <b>Name:</b> {props.repo.repoName}</span>
      <span className='username'> <b>User:</b> {props.repo.username}</span>
      <span className='forks'> <b>Fork Count:</b> {props.repo.forks}</span>
      <span className='creationDate'> <b>Date Created:</b> {props.repo.creationDate}</span>
      <a className='repoLink' href={`${props.repo.repoLink}`}> LINK</a>
    </div>
  )
}

export default Repo;
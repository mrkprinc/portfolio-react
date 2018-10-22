import React from 'react';
import './ProjectEntry.css';

const ProjectEntry = (props) => {
  return (
    <section>

      <div className='content'>
        <div className='img-wrapper'>
          <img src='./assets/images/FriendFinder-screenshot.PNG' alt='screenshot' />
        </div>
        <div className='text'>
          <h3>FriendFinder</h3>
          <p>A full-stack "find-your-best-match" app, using Express.js and Node.</p>
          <p><span role='img' aria-label='live'>🔴</span> <a href='https://fast-dusk-77293.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Live Page</a></p>
          <p><span role='img' aria-label='github'>💻</span> <a href='https://github.com/mrkprinc/FriendFinder' target='_blank' rel='noopener noreferrer'>Github</a></p>
        </div>
      </div>

    </section>
  )
}

export default ProjectEntry;
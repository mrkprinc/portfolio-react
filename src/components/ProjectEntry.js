import React from 'react';

const ProjectEntry = (props) => {
  return (
    <section>

      <div className='section-content'>
        <img src='./assets/images/FriendFinder-screenshot.PNG' alt='screenshot' />
        <div>
          <p>FriendFinder</p>
          <p>A full-stack "find-your-best-match" app, using Express.js and Node.</p>
          <p><span role='img' aria-label='live'>🔴</span> <a href='https://fast-dusk-77293.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Live Page</a></p>
          <p><span role='img' aria-label='github'>💻</span> <a href='https://github.com/mrkprinc/FriendFinder' target='_blank' rel='noopener noreferrer'>Github</a></p>
        </div>
      </div>

      <div className='section-moreInfo'>
        <hr />
        <p className='things-used'>
          <span>JavaScript</span>
          <span>jQuery</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>CSS3 Animations</span>
          <span>AJAX requests</span>
        </p>
      </div>

      <div className='clickMoreInfo'>Read more</div>

    </section>
  )
}

export default ProjectEntry;
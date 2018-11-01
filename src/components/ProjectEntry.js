import React from 'react';
import entry from './ProjectEntry.module.css';

const ProjectEntry = (props) => {
  return (
    <section>

      <div className={entry.content}>
        <div className={entry.imgWrapper}>
          <img src={props.imgSrc} alt={`${props.name} screenshot`} />
        </div>
        <div className={entry.text}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p><span role='img' aria-label='live'>🔴</span> <a href={props.liveURL} target='_blank' rel='noopener noreferrer'>Live Page</a></p>
          <p><span role='img' aria-label='github'>💻</span> <a href={props.githubURL} target='_blank' rel='noopener noreferrer'>Github</a></p>
        </div>
      </div>

    </section>
  )
}

export default ProjectEntry;
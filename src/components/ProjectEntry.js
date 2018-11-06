import React from 'react';
import entry from './ProjectEntry.module.css';

const ProjectEntry = (props) => {
  let toolsUsed = props.toolsUsed.map((tool, i) => {
    return <span className={entry.toolUsed} key={i}>{tool}</span>
  })

  return (
    <section>

      <div className={entry.content}>
        <div className={entry.imgWrapper}>
          <img src={props.imgSrc} alt={`${props.name} screenshot`} />
          <div className={entry.imgFilter}></div>
        </div>
        <div className='text'>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p>{toolsUsed}</p>
          <p><span role='img' aria-label='live'>🔴</span> <a href={props.liveURL} target='_blank' rel='noopener noreferrer'>Live Page</a></p>
          <p><span role='img' aria-label='github'>💻</span> <a href={props.githubURL} target='_blank' rel='noopener noreferrer'>Github</a></p>
        </div>
      </div>

    </section>
  )
}

export default ProjectEntry;
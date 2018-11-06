import React, {Component} from "react";
import ProjectEntry from './ProjectEntry';
import projects from '../Projects.json';

class Projects extends Component {
  render() {
    let projectEntries = projects.map((entry, i) => {
      return <ProjectEntry {...projects[i]} key={i} />
    })
    return (
      <main>
        <section className='text'>
        <p>Hi! I'm Mark Prince.</p>
        <p>
          Right now, I'm finishing up a 6-month intensive web development course at the University of Toronto. 
          You can learn more about me on&nbsp;
          <a href='https://linkedin.com/in/mark-prince' target='_blank' rel='noopener noreferrer'>LinkedIn</a>. 
        </p>
        <p>Below, you'll find some of the projects I've been working on.</p>
        </section>
        {projectEntries}
      </main>
    )
  }
}

export default Projects;
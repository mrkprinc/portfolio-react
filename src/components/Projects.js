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
          I'm a full-stack developer with a background in digital marketing. Right now, I'm finishing up a 6-month coding bootcamp at U of T.
          You can learn more about me on <a href='https://linkedin.com/in/mark-prince' target='_blank'>LinkedIn</a>. 
        </p>
        <p>Below, you'll find some of the projects I've worked on.</p>
        </section>
        {projectEntries}
      </main>
    )
  }
}

export default Projects;
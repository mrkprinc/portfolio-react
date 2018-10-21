import React, {Component} from "react";
import ProjectEntry from './ProjectEntry';
// import projects from '../Projects.json';

class Projects extends Component {
  render() {
    return (
      <main>
        <section>
          <p>Hi! I'm Mark Prince.</p>
        </section>
        <ProjectEntry />
      </main>
    )
  }
}

export default Projects;
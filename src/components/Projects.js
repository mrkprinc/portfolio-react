import React, {Component} from "react";
import projects from '../Projects.json';

class Projects extends Component {
  render() {
    return (
      <section>
        {JSON.stringify(projects, null, 2)}
      </section>
    )
  }
}

export default Projects;
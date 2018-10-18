import React, {Component} from "react";
import projects from '../Projects.json';

class Projects extends Component {
  render() {
    return (
      <section>
<<<<<<< Updated upstream
        {JSON.stringify(projects, null, 2)}
=======
        My Projects
>>>>>>> Stashed changes
      </section>
    )
  }
}

export default Projects;
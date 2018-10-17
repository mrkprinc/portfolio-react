import React, {Component} from "react";
import BackgroundBox from "./BackgroundBox.js";

class Background extends Component {
  render() {
    let grid = this.buildGrid();

    return (
      <div id='background'>
        {grid}
      </div>
    )
  }

  buildGrid() {
    let row = [];
    let grid = [];
    for(let i=0; i<this.props.cols; i++) {
      row.push(<BackgroundBox />);
    }
    for(let i=0; i<this.props.rows; i++) {
      grid.push(<div className='row'>{row}</div>);
    }
    return grid;
  }
}

export default Background;
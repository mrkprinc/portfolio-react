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
    let counter = 0;
    let grid = [];
    for(let i = 0; i < this.props.rows; i++) {
      let row = [];
      for(let j = 0; j < this.props.cols; j++) {
        row.push(<BackgroundBox key={counter} kind={(i + j) % 4} />);
        counter++;
      }
      grid.push(<div className='row' key={i}>{row}</div>);
    }
    return grid;
  }
}

export default Background;
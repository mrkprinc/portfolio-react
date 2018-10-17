import React, {Component} from "react";
import "./BackgroundBox.css";

class BackgroundBox extends Component {
  render() {
    return (
      <div className='box'>
        <div className='box-00'></div>
        <div className='box-narrow'></div>
        <div className='box-line'></div>
        <div className='box-10'></div>
        <div className='box-01'></div>
        <div className='box-11'></div>
      </div>
    )
  }
}

export default BackgroundBox;
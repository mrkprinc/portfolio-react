import React, {Component} from "react";
import box from "./BackgroundBox.module.css";

class BackgroundBox extends Component {

  constructor(props) {
    super(props);
    this.boxRef = React.createRef();
    [this.timer, this.animateOff] = [null, null];
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const rand = Math.floor(Math.random() * 12);
      if(this.props.index % 12 === rand && this.boxRef.current) {
        this.boxRef.current.classList.toggle(`${box.rotate}`);
      }
    }, 10000);
    this.animateOff = setTimeout(() => {
      if(this.boxRef.current) this.boxRef.current.classList.add('noAnimate');
    }, 4000);
  }

  componentWillUnmount() {
    [this.timer, this.animateOff] = [null, null];
  }

  render() {
    let boxType;
    switch(this.props.kind) {
      case 0: boxType = box.box0; break;
      case 1: boxType = box.box1; break;
      case 2: boxType = box.box2; break;
      case 3: boxType = box.box3; break;
      default: boxType = box.box0
    }

    return (
      <div 
        className={`${box.boxWrapper} ${this.props.kind % 2 === 0 ? box.rotate : ""}`}
        ref={this.boxRef}
      >
        <div 
          className={`${box.box} ${boxType}`}
        >
          <div className={box.box00}></div>
          <div className={box.boxNarrow}></div>
          <div className={box.boxLine}></div>
          <div className={box.box10}></div>
          <div className={box.box01}></div>
          <div className={box.box11}></div>
        </div>
      </div>
    )
  }
}

export default BackgroundBox;
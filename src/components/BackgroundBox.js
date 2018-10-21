import React, {Component} from "react";
import "./BackgroundBox.css";

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
        this.boxRef.current.classList.toggle('rotate');
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
    return (
      <div 
        className={`boxWrapper ${this.props.kind % 2 === 0 ? "rotate" : ""}`}
        ref={this.boxRef}
      >
        <div 
          className={`box box${this.props.kind}`}
        >
          <div className='box-00'></div>
          <div className='box-narrow'></div>
          <div className='box-line'></div>
          <div className='box-10'></div>
          <div className='box-01'></div>
          <div className='box-11'></div>
        </div>
      </div>
    )
  }
}

export default BackgroundBox;
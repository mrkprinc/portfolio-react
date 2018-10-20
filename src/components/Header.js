import React, {Component} from "react";

class Header extends Component {
  constructor() {
    super();
    this.spanRef = React.createRef();
  }

  componentWillUnmount() {
    if(this.spanRef.current) this.spanRef.current.classList.remove('animate'); 
  }

  render() {
    return (
      <header>
        <div id='heading-content'>
          <span id='myName' className='dark animate'>Mark Prince</span>
          <span id='myRole' className='animate'>Portfolio</span>
        </div>
      </header>
    )
  }
}

export default Header;
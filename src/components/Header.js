import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div id='heading-content'>
          <span id='myName' className='dark'>Mark Prince</span>
          <span id='myRole'>Portfolio</span>
        </div>
      </header>
    )
  }
}

export default Header;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    isClick: ''
  }

  clickHandler = (isClick) => {
    this.setState ({
      isClick: isClick
    })
  }

  render() { 
    return ( 
      <div>
        <button
        style={{fontWeight: this.state.isClick === 'A' ? 'Bold' : ''}}
        onClick={() => {this.clickHandler("A")}}
        >
          Button A
        </button>
        <button
        style={{fontWeight: this.state.isClick === 'B' ? 'Bold' : ''}}
        onClick={() => {this.clickHandler("B")}}
        >
          Button B
        </button>
      </div>
     );
  }
}
 
export default App;
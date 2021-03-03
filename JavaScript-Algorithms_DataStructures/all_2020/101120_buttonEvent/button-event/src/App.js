// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {

  handleClick = () => {
    console.log('This is : ', this)
  }
  handleClickHtml = () => {
    const displayText = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = 'Hello'
    setTimeout(()=> {
      document.getElementById('display').innerHTML = displayText
   }, 3000)
    
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>TEST 1</button><br/><br/>
        <button id='display' onClick={(e) => this.handleClickHtml(e)}>TEST 2</button>
      </div>
    )
  }
}
export default App;
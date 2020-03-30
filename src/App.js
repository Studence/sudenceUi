import React from 'react';
import logo from './logo.svg';
import proto from './proto/entity_pb';
import './App.css';
var entity = new proto.EntityUiPb();
entity.setId("123");
console.log(entity.getId());
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
          
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;

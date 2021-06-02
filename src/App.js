import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(1)
  const handleClick = () => {
    //test
    setNum(num+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {num}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>click สิ</button>
      </header>
    </div>
  );
}

export default App;

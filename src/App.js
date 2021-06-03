import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState([0,0,0])
  const random = () => {
    return Math.ceil(Math.random() * 9);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Random number</p>
        <div className = "container">
          <div className = "number">{num[0]}</div>
          <div className = "number">{num[1]}</div>
          <div className = "number">{num[2]}</div>
        </div>
        <button onClick={() => {
          setNum([random(),random(),random()]);
        }}>random</button>
      </header>
    </div>
  );
}

export default App;

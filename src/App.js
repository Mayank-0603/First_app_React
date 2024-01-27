// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MyForm from './components/MyForm';

function App() {
  const [mode, setMode] = useState("default");

  function color_Changer(event) {
    const color_Val = event.currentTarget.value;
    if (color_Val==="white") {
      setMode("default");
    }
    
    else {
      setMode("dark");
    }
    document.body.style.backgroundColor = color_Val;
  }
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Navbar name="Contact Me" mode={mode} color_chager_btn={color_Changer} />
      <MyForm mode={mode}/>
    </div>
  );
}

export default App;

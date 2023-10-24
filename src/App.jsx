import { useState } from 'react';
import './App.css';

import NavBar from './Component/NavBar';
import Bot from './Component/Bot';


function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#474e51';
    }
  }

  return (
    <>
    <NavBar mode={mode} toggleMode={toggleMode} />
    <Bot mode={mode} />
    </>
  );
}

export default App;
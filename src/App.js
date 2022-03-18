import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) =>{
    setalert({
      message : message,
      type : type
    })
  }
  const toggleMode = () =>{
      if(mode === 'light')
        {setmode('dark');
        document.body.style.backgroundColor = '#394046';
        }
      else
        {setmode('light');
        document.body.style.backgroundColor = 'white';}
  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alerts/>
    <div className="container">
    <TextForm heading="Enter your text here :" mode = {mode}/>
    </div>
    </>
  );
}

export default App;

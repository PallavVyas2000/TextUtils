import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#394046';
      showAlert("Dark Mode has been enabled.", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container-app">
          <Alerts alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About />}/>                                                      {/* Here used "exact" keyword sop that react always completely matches the url instead of partial marching*/}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here :" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


import React, { useState } from 'react';
import AboutUs from './AboutUs';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
      })
      setTimeout(() => {
        setAlert(null); 
      }, 2000);
    }
  const toggletodark = () => {
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled!", "success");
    //document.title = "TextUtils - Dark Mode";
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled!", "success");
    // document.title = "TextUtils - Light Mode";
  }
  }
  

  return (
    // <div>
    // <img src={logo} className="App-logo" alt="logo" />
    // <Hello_functional name="laboni"></Hello_functional>
    // <Hello_class name="anir"></Hello_class>
    // <HelloJSX></HelloJSX>
    // <WelcomeState></WelcomeState>
    // </div>
    <>
    <Router>
     <Navbar toggletodark={toggletodark} mode={mode}  title="TextUtils" aboutText="About Us"/>
     <Alert alert={alert}/>
     <div className='container'>
     <Routes>   
          <Route path="/about" element={<AboutUs mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter text to analyze"/>} />
        </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;

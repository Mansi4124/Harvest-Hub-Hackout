import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import SignUpForm from './Components/SignUpForm';
import Home from './Components/Home'
import { useState } from 'react';
import Footer from './Components/Footer'
import MarketPlace from './Components/MarketPlace';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import LoginForm from './Components/LoginForm';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#05294b';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <div>
        <Router>
          {/* <LoginForm></LoginForm> */}
          <Navbar title="Harvest Hub" mode={mode} toggleMode={toggleMode} />
       
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path="/marketplace" element={<MarketPlace/>}></Route>
              <Route path='/login' element={<LoginForm/>}></Route>
              <Route path='/signup' element={<SignUpForm/>}></Route>
              
            </Routes>

          </div>
         
        </Router>
        {/* <Footer/> */}
    </div>
  );
} 

export default App;
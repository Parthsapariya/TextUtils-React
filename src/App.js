import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether Dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#002147';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
      // document.body.style.color = 'white'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';
      // document.body.style.color = 'black'
    }
  }
  return (
      <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Router>     */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
      </>
  );
}

export default App;

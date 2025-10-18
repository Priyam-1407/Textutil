
import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About.js';
import  React ,{useState} from 'react'
import {  Routes, Route,} from "react-router-dom";


  


function App() {
 const [mode,setmode]= useState('light');
 const [alert, setAlert] = useState(null);
 const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => setAlert(null), 2000);
  };

const togglemode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showalert("dark mode has been enabled","success");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert("light mode has been enabled","success");
  }
};
  return (
  <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={<Textform showalert={showalert} heading="Enter the text to analyze below" mode={mode} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
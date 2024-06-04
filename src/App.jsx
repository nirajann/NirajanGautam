import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Layout/Header"
import Notfound from "./Components/Home/Notfound"
import GetinTouch from './Components/Home/Getintouch';
import Contact from './Components/Home/contact';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/getintouch" element={<GetinTouch />} />
      </Routes>

    </Router>
    </>
  );
  
}

export default App
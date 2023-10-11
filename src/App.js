import React,{useState ,useEffect} from 'react'
import './App.css';

import Page1 from './Pages/Page1';
import Problems from './components/Problems';
import {Routes,Route}from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/Main/Contactus';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';


function App() {
  const [theme,setTheme]=useState('')
  const toggleTheme = ()=>{
    theme===''? setTheme('light-theme'):setTheme('')  }
    useEffect(()=>{
      document.body.className=theme
    },[theme])
  
  return (
    <>
    
   <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/problems" element={<Page3 />} />
            <Route path="/aboutus" element={<Page2 />} />

            
        </Routes>
    
  
    </>
  );
}

export default App;

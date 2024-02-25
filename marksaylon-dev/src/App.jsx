import './App.css'
import React, {useState} from 'react';
import SideBar from './SideNav/SideBar.jsx'
import Scroller from './Items/Items.jsx';
import {BrowserRouter as Router } from  "react-router-dom";

function App() {


  return (
    <Router>
      
        <div className='appBackground'>
          <SideBar/>
          <Scroller/>
        </div>
      
    </Router>
  )
}

export default App

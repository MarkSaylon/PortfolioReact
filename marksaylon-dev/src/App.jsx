import './App.css'
import React, {useState} from 'react';
import SideBar from './SideNav/SideBar.jsx'
import Scroller from './Items/Items.jsx';

function App() {


  return (
    <>
      
        <div className='appBackground'>
          <SideBar/>
          <Scroller/>
        </div>
      
    </>
  )
}

export default App

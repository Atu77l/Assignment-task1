import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Division1 from './Component/Box/Division/division1';
import Division2 from './Component/Box/Division/division2';

function App() {
  return (
    <>
    <div className="body">
    <Navbar/>
    <Division1/>
    <Division2/>
    </div>
    </>
  )
}

export default App
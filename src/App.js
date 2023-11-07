import Home from './pages/Home/Home';
import './App.css';
import {Route, Routes, useNavigate } from "react-router-dom";
import Admin from './pages/administrator/Admin';
import ManageProfile from './components/table/ManageProfile';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import One from '../src/pages/One'
import { useState } from 'react';

function App() {
  const [showModal,setShowModal] = useState(false)
  const [title,setTitle] = useState(null)
  const  [view,setView] = useState(false)
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    <div className='admin-page'>
        
        <Sidebar/>
        <div>
        <Navbar/>
        <Routes>
          <Route path='/admin' element={<ManageProfile setShowModal={setShowModal} setView={setView} setTitle={setTitle}/>}/>
          <Route path='/admin/1' element={<One/>}/>
        </Routes>
        
       
        </div>
      
        
        
    </div>
    {/* <Route path='/admin' element={<Admin/>}/>
    <Route path='/admin/1' element={<One/>}/> */}



  
   
   
   </>
  );
}

export default App;

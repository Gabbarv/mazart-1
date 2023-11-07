import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {LiaEditSolid} from 'react-icons/lia'
import {AiOutlineEye,AiOutlineSetting} from 'react-icons/ai'
import './admin.css'
import ManageProfile from '../../components/table/ManageProfile'
import {Route, Routes, useNavigate } from "react-router-dom";
import Modal from '../../components/modal/Modal'
import One from '../One'

const Admin = () => {

  const [showModal,setShowModal] = useState(false)
  const [title,setTitle] = useState(null)
  const  [view,setView] = useState(false)
  return (
    <>
    {/* {showModal && <Modal title={title} view={view} setShowModal={setShowModal} setView={setView} setTitle={setTitle}/> }
    <div className='admin-page'>
        
        <Sidebar/>
        <div>
        <Navbar/>
       <ManageProfile setShowModal={setShowModal} setView={setView} setTitle={setTitle}/>
        
       
        </div>
        
        
    </div> */}
    </>
  )
}

export default Admin
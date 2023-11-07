import React from 'react'
import adminLogo from '../../images/admin-logo.png'
import hamburger from '../../images/hamburger.png'
import { AiOutlineSearch } from "react-icons/ai";
import {MdOutlineDashboardCustomize,MdOutlineAddHome} from 'react-icons/md'
import {GrUserAdmin} from 'react-icons/gr'
import design from '../../images/design-master.png'
import manage from '../../images/manage-leave.png'
import notification from '../../images/notification.png'
import visit from '../../images/visit.png'
import brodcast from '../../images/broadcast.png'

import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-head'>
          <img className='logo-img' src={adminLogo} alt='admin logo' />
          <img className='ham' src={hamburger} alt='ham' />

      </div>
      <div>
        <hr/>
      </div>
      <div className="searchbox">
         
          <div className="search-inbox">
            <input
             
              type="text"
              placeholder='search'
           
            />
          </div>
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
        </div>

        <div className='sidebar-heading'>
           <MdOutlineDashboardCustomize size={25}/>
           <h2>DASHBOARD</h2>
        

        </div>
        <div className='sidebar-heading'>
           <GrUserAdmin size={25}/>
           <h2>ADMINISTRATOR</h2>
        

        </div>
        <div className='sidebar-heading'>
           <MdOutlineAddHome size={25}/>
           <h2>CUSTOMER</h2>
        

        </div>
        <div className='sidebar-heading'>
           <img src={design} />
           <h2>DESIGN MASTER</h2>
        

        </div>
        <div className='sidebar-heading'>
        <img src={manage} />
           <h2>MANAGE LEAVE</h2>
        

        </div>
        <div className='sidebar-heading'>
        <img src={visit} />
           <h2>VISIT</h2>
        

        </div>
        <div className='sidebar-heading'>
        <img src={notification} />
           <h2>NOTIFICATION</h2>
        

        </div>
        <div className='sidebar-heading'>
        <img src={brodcast} />
           <h2>BROADCAST</h2>
        

        </div>

     

    </div>
  )
}

export default Sidebar
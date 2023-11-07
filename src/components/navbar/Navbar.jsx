import React from 'react'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {LiaAngleDownSolid} from 'react-icons/lia'
import my from '../../images/my.jpeg'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='notification'>
      <IoIosNotificationsOutline size={25} />
      </div>
      <div className='profile-sec'>
        <div className='imag'>
          <img src={my} alt='dp'/>

        </div>
        <div className='name'>
          <h2>Gaurav Gupta</h2>
        </div>
        <div className='arrow'>
             <LiaAngleDownSolid size={20}/>
        </div>
      </div>
        

    </div>
  
    </>
  )
}

export default Navbar
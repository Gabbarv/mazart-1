import React from 'react'
import bg from '../../images/bg-img.jpg'
import logo from '../../images/logo.png'
import './home.css'
import Login from '../../components/login/Login'

const Home = () => {
  return (
    <div className='h-screen w-full home-bg'>
        <div className='pt-14 ml-24'>
            <img className='w-40 h-auto' src={logo} alt='logo' />
        </div>
        <Login/>
    </div>
  )
}

export default Home
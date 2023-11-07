import React from 'react'

const Login = () => {
  return (
    <div className='w-1/5 rounded-xl h-3/6 ml-auto mr-14 p-5 text-white border-2 border-solid border-stone-50 bg-blue-700 bg-opacity-40'>
        <h1>Login</h1>
        <form className='mt-4'>
            <label className='mt-2' htmlFor='email'>Email</label>
            <input className='w-full mt-3' type='email' name='email' />
            <label className='mt-3' htmlFor='password'>Password</label>
            <input className='w-full mt-3' type='password' name='password'/>
            <input className='mt-4 w-full p-0.5 p-0.5  mr-auto bg-white text-black  text-center' type='submit' value='Login'/>
        </form>
    </div>
  )
}

export default Login
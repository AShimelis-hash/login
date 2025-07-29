import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState("Login")


  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form className='bg-white w-full max-w-md mx-auto  mt-10 p-8 rounded -2xl shadow-lg space-y-6'>
        <div className='text-center'>
          <p className='text-2xl font-bold text-gray-800'>{currentState}</p>
        </div>
        {
          currentState === "Login" ? null : (
            <input type='text' placeholder='name' required className='w-full px-4 py-3 border border-gray-300 rounded-md fucus:outline-none focus:ring-green-500'/>
          )
        }
        <input type='email' placeholder='Email' required className='w-full px-4 py-3 border border-gray-300 rounded-md fucus:outline-none focus:ring-green-500'/>
        <input type='password' placeholder='Password' required className='w-full px-4 py-3 border border-gray-300 rounded-md fucus:outline-none focus:ring-green-500'/>
        <div className='flex justify-between text-sm text-blue-600'>
          <p className='cursor-pointer hover:underline'>Forget Password</p>
          {
            currentState === "Login" ? ( <p className='cursor-pointer hover:underline' onClick={() => setCurrentState("Sign Up")}> Create Account</p>) :
            (<p className='cursor-pointer hover:underline' onClick={() => setCurrentState("Login")}> Login Here </p>)
          }
        </div>
        <button className='w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-3 rounded-md transition duration-75' type='submit'>
          {currentState === "Login" ? "Sign In": "Sign Up"}
        </button>
      </form>
    </div>
  )

}

export default Login
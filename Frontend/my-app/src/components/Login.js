import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Login() {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }


  return (
    < div className='flex flex-col items-center justify-center h-screen border-2 border-gray-500 p-4 shadow-xl rounded-lg bg-white'>
        <h2 className='text-3xl font-bold mb-4'>This is Login page</h2>
        <div className='flex flex-col items-center justify-center h-screen border-2 border-gray-500 p-4 shadow-xl rounded-lg bg-white '>
      <h1 className='text-3xl font-bold mb-4'>Login</h1>
      <form onSubmit={handleSubmit} className='w-full max-w-sm 
      '>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Sign In
          </button>
          <div>
          
          </div>
          
        </div>
      </form>
      <div className='flex flex-col-2 relative overflow-x-hidden left-0 '>
        <Link  className='fixed inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' to="/register"> Register</Link>
      </div>
    </div>
  
    </div>
  )
}

export default Login


import  {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SignUp() {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', {name,email, password})
        .then(result => console.log(result))
        navigate('/login')
    }
  return (
 <div className='flex flex-col items-center justify-center  h-screen border-2 border-gray-500 p-4 shadow-xl rounded-lg bg-white'>
      <h1 className='text-3xl font-bold mb-4'>Sign Up</h1>
      
        
      <div className='flex flex-col items-center justify-center h-screen border-2 border-gray-500 p-4 shadow-xl rounded-lg bg-white '>
      <form  onSubmit={handleSubmit} className='w-full max-w-sm' >
       
        <div className='mb-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Username'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
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
        <div className='mb-4'>
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
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Sign Up
          </button>
        </div>
      </form>
      <div> 
        <Link  className='fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' to={"/login"}> Login </Link>
      </div>
      </div>  
      </div> 
  )
}

export default SignUp

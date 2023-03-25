import React, {useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import {solarPanel1} from '../images/Aimages'
import { UserAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/verify-email')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={solarPanel1} alt="/" />


<div className='flex justify-center items-center h-full'>
    <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit}>
        <h2 className='text-4xl font-bold text-center py-4 text-[#dc2626]'>E-SOLAR.</h2>
        <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
        </div>
        
        <div className='flex flex-col mb-4'>
            <label>Username/Email</label>
            <input className='border relative bg-gray-100 p-2' type="text" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col '>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='w-full py-3 mt-8 bg-[#dc2626] hover:bg-[#bd3333] relative text-white'>Sign Up</button>
        <p className='flex items-center mt-2'><input className='mr-2 bg-black' type="checkbox"  />Remember Me</p>
        <p className='text-center mt-8'>Already a member? Sign in now</p>
        {error && (
  <div className="text-red-500 mt-2 text-sm">
    <p>{error}</p>
  </div>
)}
    </form>
</div>
</div>
  )
}

export default Register
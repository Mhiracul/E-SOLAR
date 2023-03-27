import { useState } from 'react';
import { UserAuth } from '../context/Auth';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import {solarPanel1} from '../images/Aimages'
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { sendPasswordResetEmail } = UserAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(email);
      setMessage('Password reset email sent! Please check your email.');
    } catch (error) {
      setMessage('Error sending password reset email.');
      console.error(error);
    }
  };

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={solarPanel1} alt="/" />


<div className='flex justify-center items-center h-full'>
    <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleResetPassword}>
        <h2 className='text-4xl font-bold text-center py-4 text-[#dc2626]'>E-SOLAR.</h2>
        <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
        </div>
        
        <div className='flex flex-col mb-4'>
            <label>Username/Email</label>
            <input className='border relative bg-gray-100 p-2' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        
        <button className='w-full py-3 mt-8 bg-[#dc2626] hover:bg-[#bd3333] relative text-white'>Sign Up</button>
        <p className='flex items-center mt-2'><input className='mr-2 bg-black' type="checkbox"  />Remember Me</p>
        <p className='text-center mt-8'>Already a member? Sign in now</p>
        <p className='text-center mt-8'>{message}</p>
        <Link className='relative text-sm text-[#dc2626] ' to="/">Back to login</Link>
    </form>
</div>
</div>
  )
}

export default ForgotPassword;
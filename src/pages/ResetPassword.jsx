import { useState } from 'react';
import { UserAuth } from '../context/Auth';
import { Link, useParams } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import {solarPanel1} from '../images/Aimages'
const ResetPassword = () => {
  const { actionCode } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const { resetPassword } = UserAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(actionCode, newPassword);
      setMessage('Password reset successfully!');
    } catch (error) {
      setMessage('Error resetting password.');
      console.error(error);
    }
  };

   return(
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={solarPanel1} alt="/" />


<div className='flex justify-center items-center h-full'>
    <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleResetPassword}>
        <h2 className='text-4xl font-bold text-center py-4 text-[#dc2626]'>E-SOLAR.</h2>
        <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
        </div>
        
       
        <div className='flex flex-col '>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button className='w-full py-3 mt-8 bg-[#dc2626] hover:bg-[#bd3333] relative text-white'>Sign Up</button>
        <p className='flex items-center mt-2'><input className='mr-2 bg-black' type="checkbox"  />Remember Me</p>
        <p className='text-center mt-8'>{message}</p>
        <Link to="/login">Back to login</Link>
       
    </form>
</div>
</div>
  
   )

        }
  export default ResetPassword;
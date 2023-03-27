import React, {useEffect, useState} from 'react'
import {FcGoogle,} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import {solarPanel1} from '../images/Aimages'
import { UserAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Login = () => {
    const { googleSignIn, user, signIn } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      const user = auth.currentUser;
      if (user.emailVerified) {
        // User is logged in and email is verified
        // Perform actions for a logged-in user
        navigate('/account')
      } else {
        // Send email verification message
        await user.sendEmailVerification();
        // Redirect user to verification page
        navigate('/verify-email');
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user, navigate]);
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={solarPanel1} alt="/" />
       

    <div className='flex justify-center items-center h-full'>
      
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit}>
            <h2 className='text-4xl font-bold text-center py-4 text-[#dc2626]'>E-SOLAR.</h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center' onClick={handleGoogleSignIn}><FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2'  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
            </div>
            <button className='w-full py-3 mt-8 bg-[#dc2626] hover:bg-[#bd3333] relative text-white'>Sign In</button>
            <Link to="/forgot-password" className='relative text-sm text-1xl font-light text-gray-500 cursor-pointer' style={{fontSize: '11px'}}>Forgot password?</Link>

            <p className='flex items-center mt-2'><input className=' relative text-black mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8 py-2 text-sm'>Not a member? {''}<Link to='/register' className='relative underline text-[#dc2626] text-sm'>Sign up now</Link> </p>
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

export default Login
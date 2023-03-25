import React from 'react';
import { UserAuth } from '../context/Auth';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[300px] m-auto h-96 py-10'>
      <h1 className='text-center text-[#dc2626] text-2xl font-bold pt-12'>WELCOME 😇</h1>
      <div>
        <p className='text-white text-center'>Welcome, {user?.displayName} {user && user.email}</p>
      </div>
      <button onClick={handleSignOut} className='bg-[#dc2626] justify-center text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-12'>
        Logout
      </button>
    </div>
  );
};

export default Account;
import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute p-4 z-20 flex justify-between bg-black w-screen opacity-80'>
    <img  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="Logo" className='w-40'/>
    {user && <div className='flex'>
      <button className='text-red-500' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
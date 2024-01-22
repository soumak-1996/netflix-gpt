import React , { useEffect }from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } 
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubcribe from onAuthStateChanged when component unmounts
    return () => unSubscribe();
   },[]); 
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute p-4 z-20 flex justify-between bg-black w-screen opacity-80'>
    <img  src={LOGO}
      alt="Logo" className='w-40'/>
    {user && <div className='flex'>
      <button className='text-red-500 pr-4' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
import React , { useEffect }from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';
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
  const showGpt = useSelector(store => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }
  const handleSearchClick = () =>
  {
    //Toggle GPT Search
    dispatch(toggleGPTSearchView());
  }
  const setAppLanguage = (e) =>
  {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='absolute p-4 z-20 flex justify-between bg-black w-screen opacity-80'>
    <img  src={LOGO}
      alt="Logo" className='w-40'/>
    {user && <div className='flex'>
      {showGpt && <select className='bg-gray-400 p-2 mb-2.5 mt-3' onChange={setAppLanguage}>
        <option value="en" className="text-white text-lg px-0">English</option>
        <option value="hindi" className="text-white">Hindi</option>
        <option value="spanish" className="text-white">Spanish</option>
      </select>}  
      <button className='py-2 px-4 bg-red text-white text-lg hover:scale-90' onClick={handleSearchClick}>{showGpt ? "Back to browse" : "Search"}</button>
      <button className='text-red-500 pr-4' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
import React, { useRef, useState } from 'react';
import Header from './Header';
import {validateSignInData} from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[isSignInForm,setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage,setErrorMessage] = useState("");
  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () =>
  {
    //Validate form data
    var emailCurr = email.current.value; var passwordCurr = password.current.value;
    var message = validateSignInData(emailCurr,passwordCurr);
    setErrorMessage(message);
    if(message !== "") return;
    // Sign in or Sign Up
    if(!isSignInForm)
    {
      // Sign up
      createUserWithEmailAndPassword(auth, emailCurr, passwordCurr)
      .then((userCredential) => {
        // Signed up 
        updateProfile(auth.currentUser, {
          displayName: name.current.value
        }).then(()=> {
          const {uid,email,displayName} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
        // ...
      })
      .catch((error) => {
       setErrorMessage(error.message);
        // ..
      });
    }
    else{
      //Sign In
      signInWithEmailAndPassword(auth, emailCurr, passwordCurr)
      .then((userCredential) => {
        // Signed in 
        navigate("/browse");
    // ...
  })
  .catch((error) => {
    setErrorMessage(error.message);
  });
    }

  } 
  return (
    <>
    <Header/>
    <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo"/>
    </div>
    <div className='absolute w-4/12 bg-black p-12 mx-auto right-0 left-0 my-36 bg-opacity-80'>
    <h1 className='text-white text-3xl m-4'>{isSignInForm ?  "Sign In" : "Sign up" }</h1>
    <form onSubmit={(e)=> {e.preventDefault()}}>
        {!isSignInForm && <input type='text'ref={name} placeholder='Full Name' className='m-4 p-2 w-10/12 rounded-lg bg-gray-600 text-white'/>}
        <input type='text' ref={email} placeholder='Email' className='m-4 p-2 w-10/12 rounded-lg bg-gray-600 text-white' />
        <input type='password' ref={password} placeholder='Password' className='m-4 p-2 w-10/12 rounded-lg bg-gray-600 text-white'/>
        {<p className='text-red-400 px-2 mx-4 text-lg'>{errorMessage}</p>}
        <button type="submit" className='bg-red-800 rounded-lg p-2 m-4 text-white w-10/12' onClick={handleButtonClick}> {isSignInForm ?  "Sign In" : "Sign up" }</button>
        <p className='text-white p-2 m-4 hover:scale-110 cursor-pointer' onClick={handleSignIn}>{!isSignInForm ?  "ALready a user? Sign in now." : "New to Netflix? Sign up now." }</p>
        
    </form> 
    </div>   
   </>
  )
}

export default Login;
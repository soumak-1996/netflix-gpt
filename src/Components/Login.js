import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const[isSignInForm,setIsSignInForm] = useState(true);
  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <>
    <Header/>
    <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo"/>
    </div>
    <div className='absolute w-4/12 bg-black p-12 mx-auto right-0 left-0 my-36 bg-opacity-80'>
    <h1 className='text-white text-3xl m-4'>{isSignInForm ?  "Sign In" : "Sign up" }</h1>
    <form>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='m-4 p-2 w-10/12 rounded-lg bg-gray-600 text-white'/>}
        <input type='text' placeholder='Email' className='m-4 p-2 w-10/12 rounded-lg bg-gray-600 text-white' />
        <input type='text' placeholder='Password' className='m-4 p-2 w-10/12 rounded-lg bg-gray-600 text-white'/>
        <button type="submit" className='bg-red-800 rounded-lg p-2 m-4 text-white w-10/12'> {isSignInForm ?  "Sign In" : "Sign up" }</button>
        <p className='text-white p-2 m-4 hover:scale-110 cursor-pointer' onClick={handleSignIn}>{!isSignInForm ?  "ALready a user? Sign in now." : "New to Netflix? Sign up now." }</p>
    </form> 
    </div>   
   </>
  )
}

export default Login
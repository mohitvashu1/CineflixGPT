import React, { useRef } from 'react'
import Header from './header' 
import { useState } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';




const Login = () => {
     
  const[isSignInForm , setIsSignInForm]= useState(null);
  const[errorMessage , setErrorMessage]= useState(null);
  
  const dispatch= useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonClick = () => {
    //Validate the form data
    
    const message= checkValidData(email.current.value ,password.current.value) 
   setErrorMessage(message);
    if(message) return;
    
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {   
      displayName: name.current.value,
      photoURL:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})
   .then(() => {
    const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
  
   })  
    .catch((error) => {
     setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage+errorCode);
    
  });
    }else{
      signInWithEmailAndPassword(auth,email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage+errorCode);
  });
     
    }
    

  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_small.jpg"
       alt="Background"/>
       
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 absolute p-12 bg-black mt-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" :"Sing Up"}</h1>
      {!isSignInForm &&(<input  type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'></input>)}
      <input ref={email} type="text"  placeholder='Email or Mobile Number' className='p-4 my-4 w-full bg-gray-800'></input>
      {!isSignInForm &&(<input ref={password} type="text" placeholder='Create a Password' className='p-4 my-4 w-full bg-gray-800'></input>)}
      {isSignInForm &&(<input  ref={password} type="text" placeholder='Enter Your Password' className='p-4 my-4 w-full bg-gray-800'></input>)}
      <label className="flex items-center space-x-2 text-sm">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600"
      />
      <span>I have read all the terms &amp; conditions</span>
    </label>
    <p className='text-red-500 font-bold'>{errorMessage}</p>
   
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={HandleButtonClick}> {isSignInForm ? "Sign In" :"Sing Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New To Cineflix? Sign Up Now" : "Already a User ? Login Here"}</p>
      </form>
    </div>
  )
}

export default Login

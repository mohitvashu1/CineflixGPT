import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import logo1 from "../Images/CINEFLIX.png"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch=useDispatch(); 
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
  const handleSignOut=() => {signOut(auth).then(() => {
   
  }).catch((error) => {
    navigate("/error");
  });}
  const [showSignOut, setShowSignOut] = useState(false);
  const handleGPTsearchClick=()=>{
    dispatch(toggleGptSearchView());
    

  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  
  return (
    <div className="absolute w-screen px-12 py-1 bg-gradient-to-b from-black scrollbar-none z-10 flex justify-between ">
      <img 
      className=" w-48  cursor-pointer "
      src={logo1}
       alt="logo"/>
       {user&&(
        <div className='flex p-3'>
          
          <button onClick={handleGPTsearchClick} className=" text-white m-2 bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 h-12   py-2 text-center me-2 my-0 mt-0 mb-2">
            {showGptSearch ? "Home" : "🤖 A.I."}
            </button>
        <img
              className='hidden md:block w-12 h-12 cursor-pointer'
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt='usericon'
              onClick={() => setShowSignOut((prev) => !prev)}
            />
            {showSignOut && (
              <div className="flex flex-col  items-start">
    <button
      onClick={handleSignOut}
      className="m-3 text-white bg-gray-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-2xl  px-3 py-1 text-xs h-8   text-center me-2 my-0 mt-0 mb-2"

    >
      Log-out
    </button> 
    {showGptSearch && (<select onChange={handleLanguageChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ">
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
        </option>
      ))}
    </select>)}
  </div>
            )}
        </div>
       )}  
      </div>
  ) 
}

export default Header;


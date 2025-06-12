import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GPTsearch = () => {
  return (
 <>
      <div className="fixed -z-10">
        <img className="w-screen h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_small.jpg" alt="logo" />
      </div>
      <div className="">
         <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </> 
  );
};

export default GPTsearch

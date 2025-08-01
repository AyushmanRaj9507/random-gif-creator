import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random GIF Viewer</h1>


      {
        loading ? (
          <Spinner />
        ) : (
          <img
            src={gif}
            alt="Random GIF"
            width="400"
            className="rounded-lg shadow-md animate-fadeIn transition-transform duration-500 hover:scale-105 hover:rotate-1"
          />
        )
      }


      

      <button
            onClick={() => fetchData()}
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] shadow-md hover:scale-105 hover:bg-yellow-400 transition-transform duration-300 ease-in-out"
          >
            Generate
      </button> 



    </div>
  )
}

export default Random

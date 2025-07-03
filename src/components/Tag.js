import React, { useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Tag = () => {
  const [tag, setTag] = useState('car');
  const { gif, loading, fetchData } = useGif(tag);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchData(tag);
    }
  };

  return (
    <div className="w-11/12 md:w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg border border-black shadow-lg flex flex-col items-center gap-y-5 mt-[15px] p-4">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold text-white">
        Random {tag} Gif
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          width="400"
          alt={`random ${tag}`}
          className="rounded-lg shadow-md animate-fadeIn"
        />
      )}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-lg py-2 rounded-lg mb-[20px] shadow"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;

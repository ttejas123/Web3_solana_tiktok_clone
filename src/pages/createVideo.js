import React, { useState } from 'react';

function Alloutes(props) {
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  return (
    <div className="bg-red-900 h-[100vh] flex justify-center items-center w-[100%]">
        <div className="bg-white w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] rounded-lg flex flex-col justify-center items-center py-5">
        
        <div className="font-bold text-xl">Upload Tiktok</div>
        
        <div className="my-5 flex flex-col justify-center items-center w-[100%]">
            <div className="text-md text-left w-[90%]">Description:</div>
            <input className="bg-gray-200 rounded-md py-[8px] mb-1 w-[90%]" value={description} onChange={(e)=> setDescription(e.target.value)} />
            <div className="text-md text-left w-[90%]">Video Url:</div>
            <input className="bg-gray-200 rounded-md py-[8px] px-[3px] w-[90%]" value={url} onChange={(e)=> setUrl(e.target.value)} />
        </div>
        
        <div className="bg-purple-700 rounded-lg w-[80%] text-center text-white py-[9px] font-bold cursor-pointer " onClick={() => {
            props.signup(description, url)
          }}>Upload</div>
        </div>
    </div>
  );
}

export default Alloutes;

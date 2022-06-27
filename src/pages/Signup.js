import React, { useState } from 'react';

function Alloutes(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  return (
    <div className="bg-stone-900 h-[100vh] flex justify-center items-center">
        <div className="bg-white w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] rounded-lg flex flex-col justify-center items-center py-5">
        
        <div className="font-bold text-xl">Sign Up To Use Tik-Tok</div>
        
        <div className="my-5 flex flex-col justify-center items-center w-[100%]">
            <div className="text-md text-left w-[90%]">Username:</div>
            <input className="bg-gray-200 rounded-md py-[8px] mb-1 w-[90%]" value={name} onChange={(e)=> setName(e.target.value)} />
            <div className="text-md text-left w-[90%]">Profile Image:</div>
            <input className="bg-gray-200 rounded-md py-[8px] px-[3px] w-[90%]" value={img} onChange={(e)=> setImg(e.target.value)} />
        </div>
        
        <div className="bg-purple-700 rounded-lg w-[80%] text-center text-white py-[9px] font-bold cursor-pointer " onClick={() => {
            // console.log(name+" "+img)
            props.signup("name", "img")
            // props.setAccount(true)
          }}>Sign Up</div>
        </div>
    </div>
  );
}

export default Alloutes;

import React from "react";
import {useMyContext} from "./Context"
import  {MaterialUISwitch} from "../Assets/Muiswitch"

const Userbar = () => {
    const {theme , changeTheme} = useMyContext();

    
  return (
    
    <div className={`w-[16vw] fixed left-[84%] bg-gray-200 h-[100vh]  ${theme === 'light'? "bg-gray-200":`${theme} border-t-2 border-b-2` }`}>
       <div className="flex items-center justify-center gap-2 mt-5">
        <h1 className="text-xl">Hi, User!</h1>

        <img
          src="/img/images.jpeg"
          alt=""
          className="w-[40px] h-[40px] rounded-[50px]"
        />
      </div>
      <div className="px-5 flex justify-between items-center pt-5">
        <MaterialUISwitch onChange={changeTheme} />
      </div>
    </div>
  );
};

export default Userbar;

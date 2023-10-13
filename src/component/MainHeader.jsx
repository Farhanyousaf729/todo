import React from "react";
import { HiBell } from "react-icons/hi";
import {useMyContext} from "./Context"

const MainHeader = ({ setPopup,todo }) => {
  const {theme  } = useMyContext();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthName = currentDate.toLocaleString("en-US", { month: "long" });
  const day = currentDate.getDate();
  return (
    <>
    <div className={` flex justify-between mt-3  ${theme === 'light'? "text-gray-600":`${theme} ` }  `}>
      <div className="w-4/12">
        <input
          type="text"
          placeholder="Search task"
          className="w-[100%] px-2 py-2 rounded bg-gray-100 placeholder:text-sm"
        />
      </div>
      <div className="w-2/12 pt-2 ">
        {year}-{monthName}-{day}
      </div>
      <div className=" w-3/12 flex gap-3">
        <HiBell className="text-xl text-purple-600 mt-2" />
        <button
          className="bg-purple-600 rounded text-white w-[90%] py-2 "
          onClick={() => setPopup(true)}
        >
          ADD TASK
        </button>
      </div>
    </div>
    <div>
        <h1 className={`text-xl text-gray-800 font-semibold pt-8 pb-10  ${theme === 'light'? "text-gray-600":`${theme} ` }`}>All tasks ({todo.length} tasks)</h1>
    </div>
    </>
  );
};

export default MainHeader;

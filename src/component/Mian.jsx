import React from "react";
import MainHeader from "./MainHeader";
import Tasklist from "./Tasklist";
import {useMyContext} from "./Context"


const Mian = ({ status, todo, setPopup, handleDelete, handleCompleted ,handleImportant }) => {
  const {theme} = useMyContext();

  return (
    <div className={`w-[68vw] min-h-[100vh] relative left-[16vw] bg-gray-300 px-5 ${theme === 'light'? "bg-gray-300":`${theme} border-2` } `}>
      <MainHeader setPopup={setPopup} todo={todo} />

      <Tasklist status={status} todo={todo} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant}/>
      
    </div>
  );
};

export default Mian;

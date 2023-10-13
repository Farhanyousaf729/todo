import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { HiMiniCalendarDays, HiOutlineTrash } from "react-icons/hi2";

const Task = ({ele,handleDelete, handleCompleted ,handleImportant}) => {
  return (
    <div
      key={ele.id}
      className=" w-[31.68%]  rounded-[10px] bg-gray-200 shadow-lg pt-2 px-3"
    >
      <h1 className="text-normal font-medium text-gray-800">{ele.task}</h1>
      <p className="text-sm text-gray-700">{ele.description}</p>
      <h1 className="text-md font-medium pt-16 flex items-center gap-2">
        <HiMiniCalendarDays className="text-normal" />
        {ele.date}
      </h1>
      <div className="border-dashed border-t-2 border-gray-300 mt-5 mb-3">
        <div className="flex justify-between items-center">
          <button
            className={`${
              ele.completed ? "bg-green-300" : "bg-yellow-200"
            } rounded-[50px] px-2 py-1 mt-3`}
            onClick={() => handleCompleted(ele.id)}
          >
            {ele.completed ? "completed" : "uncompleted"}
          </button>

          <div className="flex gap-2">
            <button
              className="pt-2 text-xl"
              onClick={() => handleImportant(ele.id)}
            >
              {ele.important ? (
                <AiFillStar className="text-red-500" />
              ) : (
                <AiOutlineStar />
              )}
            </button>
            <button
              className="text-xl pt-2"
              onClick={() => handleDelete(ele.id)}
            >
              <HiOutlineTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

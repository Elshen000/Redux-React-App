import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";
const Header = () => {
    const disptach=useDispatch()
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">React App</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select onChange={e=>disptach(sortingDataFunc(e.target.value))} className="h-10 rounded-lg" name="" id="">
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>
        <div>
          <input onChange={e=>disptach(searchDataFunc(e.target.value))} className="h-10 rounded-lg px-4 text-black" type="text" placeholder="Search.." />
        </div>
        <div onClick={()=>disptach(modalFunc())} className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"> 
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};
export default Header;

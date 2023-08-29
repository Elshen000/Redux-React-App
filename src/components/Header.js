import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
const Header = () => {
    const disptach=useDispatch()
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">React App</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-lg" name="" id="">
            <option value="">Artan</option>
            <option value="">Azalan</option>
          </select>
        </div>
        <div>
          <input className="h-10 rounded-lg px-4 text-black" type="text" placeholder="Axtar.." />
        </div>
        <div onClick={()=>disptach(modalFunc())} className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"> 
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};
export default Header;

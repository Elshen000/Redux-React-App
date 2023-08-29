import React from "react";
const Input = ({placeholder,name,id,type,onChange}) => {
  return (
  <input className="h-10 w-full border rounded-md p-2 outline-none mt-3" type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} />
  )
};
export default Input;

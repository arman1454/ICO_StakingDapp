import React from "react";

const InputRatio = ({value,index}) => {
  return (
    <li>
      <input type="radio" id ={`type${index}`} />
      <label htmlFor={`type${index}`}>
        {value}
      </label>
    </li>
  )
};

export default InputRatio;

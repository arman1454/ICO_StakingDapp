import React from "react";

const PopUpButton = ({handleClick,title}) => {
  return(
    <button onClick={handleClick} className="form__btn" type="button">
      {title}
    </button>
  )
};

export default PopUpButton;

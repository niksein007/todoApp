import React from "react";

const CheckBox = (props) => {

  return (
    <div className="CheckBox">
      <input
        type="checkbox"
        checked={props.completed}
        //using the key as index from the database array
        onChange={(e)=>props.handleCheckBox(e,props.index)}
      />
    </div>
  );
};
export default CheckBox;

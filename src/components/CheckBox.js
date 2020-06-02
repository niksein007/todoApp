import React from "react";

const CheckBox = (props) => {

  return (
    <div className="CheckBox">
      <input
      id={props.id}
        type="checkbox"
        checked={props.completed}
        //using the index as id from the database array
        onChange={(e)=>props.handleCheckBox(e,props.id)}
      />
    </div>
  );
};
export default CheckBox;

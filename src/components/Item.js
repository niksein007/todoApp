import React from "react";
import ChecKBox from "./CheckBox";

const Item = (props) => {
  return (
    <div className="Item">
      <ChecKBox
        completed={props.item.completed}
        handleCheckBox={props.handleCheckBox}
        id={props.id}
      />
      <label htmlFor={props.id}>{props.item.text}</label>
    </div>
  );
};
export default Item;

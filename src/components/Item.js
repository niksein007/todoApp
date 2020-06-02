import React from "react";
import ChecKBox from "./CheckBox";

const Item = (props) => {
  return (
    <div className="Item">
      <ChecKBox
        completed={props.item.completed}
        handleCheckBox={props.handleCheckBox}
        index ={props.index}
      />
      <div>{props.item.text}</div>
    </div>
  );
};
export default Item;

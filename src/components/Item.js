import React from "react";
import ChecKBox from "./CheckBox";

const Item = (props) => {
  const item_sub = ()=>{
let sub =document.getElementById(`sub${props.id}`);

sub.className = sub.className ==="item_subShow"?"item_subHide":"item_subShow"

  }
  return (
    <div className="Item">
      <div className="item_main" >
      <ChecKBox
        completed={props.item.completed}
        handleCheckBox={props.handleCheckBox}
        id={props.id}
      />
      <label htmlFor={props.id}>
      <span> {props.item.text}</span> <button onClick={item_sub}>&dArr;</button>
      </label>

      </div>


      <div id={`sub${props.id}`} className="item_subShow">
      <div className='date'>Date: {props.item.date}</div>  
      <div className='time'>Start Time:{props.item.time}</div>   
      <div className='endtime'>End Time:{props.item.endTime}</div> 
      </div>  
    </div>
  );
};
export default Item;

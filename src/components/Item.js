import React from "react";

const Item = (props) => {
  const displayDetails = () => {
    let itemData = document.getElementById(`data${props.id}`);

    itemData.className =
      itemData.className === "item-dataShow"
        ? "item-dataHide"
        : "item-dataShow";
  };
  return (
    <div className="Item">
      <div className='main-item'>
        <div className='title'>
        <input
        id={props.id}
        type="checkbox"
        checked={props.item.completed}
        //using the index as id from the database array
        onChange={(e) => props.handleCheckBox(e, props.id)}
      />
      <label htmlFor={props.id}>
        <span className='text'> {props.item.text}</span>{" "}
      </label>
        </div>
     
      <button onClick={displayDetails}>&dArr;</button>

      </div>
     

      <div id={`data${props.id}`} className="item-dataHide">
        <div className="date">Date: {props.item.date}</div>
        <div className="time">Start Time:{props.item.time}</div>
        <div className="endtime">End Time:{props.item.endTime}</div>
      </div>
    </div>
  );
};
export default Item;

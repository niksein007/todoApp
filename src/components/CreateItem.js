import React from "react";

class CreateItem extends React.Component {
  state = {
    text: "",
    completed: "",
    date: "",
    time: "",
    endTime: "",
    errMsg:false,
  };
  dataHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
if (this.state.text === '') {
  this.setState({errMsg:true})
  return
}
    this.props.createItemHandler(this.state);//in the App

    this.setState({
      text: "",
      completed: "",
      date: "",
      time: "",
      endTime: "",
    });

    this.props.showItems()
  };
  render() {
   
    return (
      <div className="CreateItem">
        <form onSubmit={this.submitHandler}>
          <textarea
            value={ this.state.text }
            onChange={this.dataHandler}
            name="text"
            placeholder='Enter Activity' 
            className={this.state.errMsg && 'errMsgBorder'}
          />
          <p className={ this.state.errMsg ? 'errMsg':'errMsgHide'}>Please enter activity!!! *</p>

          <input
            type="date"
            onChange={this.dataHandler}
            name="date"
            value={this.state.date}
          />
          <input
            type="time"
            onChange={this.dataHandler}
            name="time"
            value={this.state.time}
          />
          <input
            type="time"
            onChange={this.dataHandler}
            name="endTime"
            value={this.state.endTime}
          />

          <input type="submit" />
        </form>
        <button onClick={this.props.showItems}>View Entries</button>
      </div>
    );
  }
}
export default CreateItem;

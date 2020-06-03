import React from "react";

class CreateItem extends React.Component {
  state = {
    text: "",
    completed: "",
    date: "",
    time: "",
    endTime: "",
  };
  dataHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.CreateItem(this.state);

    this.setState({
      text: "",
      completed: "",
      date: "",
      time: "",
      endTime: "",
    });
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.submitHandler}>
          <input
            className="input"
            type="text"
            onChange={this.dataHandler}
            name="text"
            value={this.state.text}
          />
          <input
            className="input"
            type="date"
            onChange={this.dataHandler}
            name="date"
            value={this.state.date}
          />
          <input
            className="input"
            type="time"
            onChange={this.dataHandler}
            name="time"
            value={this.state.time}
          />
          <input
            className="input"
            type="time"
            onChange={this.dataHandler}
            name="endTime"
            value={this.state.endTime}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default CreateItem;

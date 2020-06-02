import React from "react";
import "./App.css";
import { database } from "./components/todoData";
import Item from "./components/Item";
import CreateItem from "./components/CreateItem";

class App extends React.Component {
  state = {
    data: [],
  };
  CreateItem = (newItem) => {
    this.setState((prevState) => {
      let newData = [...prevState.data, newItem];
      return {
        data: newData,
      };
    });

    console.log("item created");
  };

  handleCheckBox = (e, id) => {
    //doing the function outside the setsate and inside the setstate both works
    //outside avoids re-render changing re-runing the conditional statements

    let newData = this.state.data.map((item, mapIndex) => {
      if (mapIndex === id) {
        // item.completed = !item.completed (changes the previous state. The retun below does not)
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    //  console.log(newData);
    //  console.log(this.state.data);
    this.setState({ data: newData });

    //when state is modified indirectly the problem of rerendering this not occur in this case
    //     this.setState((prevState) => {
    //       let newData = prevState.data.map((item, mapIndex) => {
    //         if (mapIndex === id) {
    // console.log(item.completed);
    //           return {
    //             ...item,
    //           completed:!item.completed
    //           }
    //         }
    //         return item;
    //       });
    //       return { data: newData };
    //     });
  };

  componentDidMount() {
    // useing this for now to illustrate wat will happen in a real database
    //could have just passed database directly to data
    this.setState({ data: database });
  }
  render() {
    // console.log('render');

    const databaseItems = this.state.data.map((item, index) => {
      return (
        <Item
          key={index}
          // key is not a property it will return undefined
          //using index to get the index value
          id={index}
          item={item}
          handleCheckBox={this.handleCheckBox}
        />
      );
    });
    return (
      <div className="App">
        <CreateItem CreateItem={this.CreateItem} />

        {databaseItems}
      </div>
    );
  }
}

export default App;

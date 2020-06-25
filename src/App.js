import React from "react";
import "./App.css";
import { database } from "./components/todoData";
import Item from "./components/Item";
import CreateItem from "./components/CreateItem";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Plans from "./components/Plans";
import PersonalQuotes from "./components/PersonalQuotes";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Logout from "./components/Logout";


import { BrowserRouter,Switch, Route,Link} from "react-router-dom";


class App extends React.Component {
  state = {
    data: [],
    loggedIn: false,
    addItem:false,
  };

  loggedIn = () => {
    this.setState({
      loggedIn: true,
    });
  };

  addItemHandler = () => {
  
    this.setState((prevState)=>{
      return {addItem:!prevState.addItem}
    });
  };

  createItemHandler = (newItem) => {
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

    this.setState({ data: newData });
  };

  componentDidMount() {
    // useing this for now to illustrate wat will happen in a real database
    //could have just passed database directly to data
    this.setState({ data: database });
  }
  render() {
    const databaseItems = this.state.data.map((item, index) => {
      return (
        <Item
          key={index}
          id={index}
          item={item}
          handleCheckBox={this.handleCheckBox}
        />
      );
    });
    return (
      <div className="App">
        <BrowserRouter>

        <Header link ={Link} />

        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Logout />
          </Route>
        </Switch>

        {/* {!this.state.loggedIn ? (
          <User loggedIn={this.loggedIn} />
        ) : (
          <div>
            {!this.state.addItem && (
              <div className='items'>
                 {databaseItems}
               <div>  
                 </div>
                <button className="addItemBtn" onClick={this.addItemHandler}>
                  Add More
                </button>
              </div>
            )}
            {this.state.addItem && (
              <CreateItem createItemHandler={this.createItemHandler} showItems={this.addItemHandler} />
            )}
          </div>
        )} */}

        <Footer />

        </BrowserRouter>

      </div>
    );
  }
}

export default App;

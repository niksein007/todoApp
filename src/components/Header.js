import React from "react";
import {Link} from 'react-router-dom'

class Header extends React.Component {
  state = {
    active: true,
  };

  navHandler = (e) => {
const id = e.target.id
let nav = document.querySelector("nav");

// console.log(id);

    if (id === 'plans' || id ==='quotes') {
      return
    }else if (id ==='title') {
      nav.classList.remove('visible')
      return
    }
    // console.log(nav);
    nav.classList.toggle('visible')
    
  };

  listHandler1=()=>{
    const element= document.getElementById('inner1')
    // console.log(element);
    element.classList.toggle('visible')
  }
  
  listHandler2=()=>{
    const element= document.getElementById('inner2')
    // console.log(element);
    element.classList.toggle('visible')
  }


  render() {
    //RTEMEMBER EVENTS BUBBLE UP TO THE PARENT CONTAINER

    // const Link = this.props.link
    return (
      <header className="Header">
        <div className="title" onClick={this.navHandler}  > <Link to='/'  id='title'>markList</Link> </div>
        <div onClick={this.navHandler}>
        <div className="menu-burger"  ></div>

        </div>

        <nav onClick={this.navHandler}>
        <ol className='list'>
            <li  className='list-item' onClick={this.listHandler1} id='plans'>
              Plans
              <ol className='list inner-list' id='inner1'>
                <li className='list-item inner-list-item'> <Link to='/daily'>Daily </Link> </li>
                <li className='list-item inner-list-item'> <Link to='/weekly'>weekly</Link> </li>
                <li className='list-item inner-list-item'> <Link to='/monthly'>Monthly</Link> </li>
                <li className='list-item inner-list-item'> <Link to='/yearly'>Yearly</Link> </li>
              </ol>
            </li>
            <li  className='list-item' onClick={this.listHandler2} id='quotes'>
              Personal Quotes
              <ol className='list inner-list' id='inner2' >
                <li className='list-item inner-list-item' > <Link to='/love'>Love </Link> </li>
                <li className='list-item list-item inner-list-item'> <Link to='/life'> Life</Link> </li>
                <li className='list-item inner-list-item'> <Link to='/friends'>Friends </Link> </li>
                <li className='list-item inner-list-item'> <Link to='/sex'> Sex </Link></li>
              </ol>
            </li>
            <li className='list-item' > <Link to="/about">About Marklist </Link> </li>
            <li className='list-item' > <Link to="/contact"> Contact us</Link> </li>

            <li className='list-item' > <Link to='/login'>LogIn </Link> </li>

         <li className='list-item' > <Link to='/logout'>  LogOut </Link> </li>

          </ol>
        </nav>
      </header>
    );
  }
}
export default Header;

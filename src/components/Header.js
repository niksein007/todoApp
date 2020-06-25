import React from "react";

class Header extends React.Component {
  state = {
    active: true,
  };

  navHandler = () => {
   let nav = document.querySelector("nav");
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
    return (
      <header className="Header">
        <div className="title">markList</div>
        <div onClick={this.navHandler}>
        <div className="menu-burger"  ></div>

        </div>

        <nav>
        <ol className='list'>
            <li  className='list-item' onClick={this.listHandler1}>
              Plans
              <ol className='list inner-list' id='inner1'>
                <li className='list-item inner-list-item'>Daily</li>
                <li className='list-item inner-list-item'>weekly</li>
                <li className='list-item inner-list-item'>Monthly</li>
                <li className='list-item inner-list-item'>Yearly</li>
              </ol>
            </li>
            <li  className='list-item' onClick={this.listHandler2}>
              Personal Quotes
              <ol className='list inner-list' id='inner2' >
                <li className='list-item inner-list-item'>Love</li>
                <li className='list-item list-item inner-list-item'>Life</li>
                <li className='list-item inner-list-item'>Friends</li>
                <li className='list-item inner-list-item'>Sex</li>
              </ol>
            </li>
            <li className='list-item' >About Marklist</li>
            <li className='list-item' >Contact us</li>

            <li className='list-item' >Log In</li>
            <li className='list-item' >Log Out</li>
          </ol>
        </nav>
      </header>
    );
  }
}
export default Header;

import React from "react";

class Footer extends React.Component {
  render() {
    let year = new Date().getFullYear();

    return (
      <footer className="Footer">
        <div className='copyRight'> All Rights Reserved &copy;{year}</div>
      </footer>
    );
  }
}
export default Footer;

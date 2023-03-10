import React from "react";
import "../styles/Navbar.css";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  section: {
    margin: 0,
    background: "orange"
  },
  heading: {
    display: "flex",
    justifyContent: "flex-end",
    background: "green"
    
    
  },
  content: {
    background: "red",
    fontSize: "40px"
  }
};

function Navbar() {
  return (
    <nav style={styles.heading} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;

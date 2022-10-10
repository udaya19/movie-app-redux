import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input type="text" />
          <button id="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default NavBar;

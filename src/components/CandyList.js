import React, { Component } from "react";
// import candyTypes from "./CandyTypes";

class Candies extends Component {
  render() {
    return (
      <article>
        <h1>Candy List</h1>
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            {candy.name}, is candy.
          </div>
        ))}
      </article>
    );
  }
}

export default Candies;

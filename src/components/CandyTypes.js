import React, { Component } from "react"


class CandyTypes extends Component {
    render() {
      return (
        <article>
          <h1>Candy Types</h1>
          {this.props.candyTypes.map(singlecandyType => {
            return <p key={singlecandyType.id}>{singlecandyType.type}</p>;
          })}
        </article>
      );
    }
  }

  export default CandyTypes;
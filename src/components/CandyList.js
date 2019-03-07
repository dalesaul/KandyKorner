import React, { Component } from "react";
import candy from "./candy.png"
import "./candy.css"
// import candyTypes from "./CandyTypes";

export default class Candies extends Component {
  render() {
    return (
      <section className="candies">
        {
          this.props.candies.map(singleCandy =>
          <div key={singleCandy.id} className="card">
          <div className="card-body">
                            <h5 className="card-title">
                                <img src={candy} className="icon--candy" alt="candy Icon"/>
                                {singleCandy.name}
                                <button className="btn btn-danger"
                                    onClick={() => this.props.deleteCandy(singleCandy.id)}>Delete</button>

                            </h5>
                        </div>
                  </div>
                )
            }
      </section>
    );
  }
}



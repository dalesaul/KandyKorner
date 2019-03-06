import { Route } from 'react-router-dom'
import React, { Component } from "react";
import Locations from "./Locations";
import Candies from "./CandyList";
import EmployeeList from './EmployeeList';
import CandyTypes from './CandyTypes';

class ApplicationViews extends Component{

state = {
    locations: [],
    employees: [],
    candyTypes: [],
    candies: []
};

componentDidMount(){
    const newState = {};
    fetch("http://localhost:5002/employees")
    .then(employees => employees.json())
    .then(parsedEmployees => {
      newState.employees = parsedEmployees;
      return fetch("http://localhost:5002/locations")
    }).then(locations => locations.json())
    .then(parsedLocations => {
      newState.locations = parsedLocations;
      return fetch("http://localhost:5002/candies")
    }).then(candies => candies.json())
    .then(parsedCandies => {
      newState.candies = parsedCandies;
      return fetch("http://localhost:5002/candyTypes")
    }).then(candyTypes => candyTypes.json())
    .then(parsedCandyTypes => {
      newState.candyTypes = parsedCandyTypes;
      this.setState(newState);
    })
  }

render (){
    return (
        <div id="div-container">
            <Route exact path="/" render={(props) => {
                    return <Locations locations={this.state.locations} />
                }} />
            <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            <Route exact path="/candyTypes" render={(props) => {
                    return <CandyTypes candyTypes={this.state.candyTypes} />
                }} />
            <Route exact path="/candies" render={(props) => {
                    return <Candies candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
        </div>
    )
}

}

export default ApplicationViews;
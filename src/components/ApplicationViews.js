import { Route } from 'react-router-dom'
import React, { Component } from "react";
import Locations from "./Locations";
import Candies from "./CandyList";
import EmployeeList from './EmployeeList';
import CandyTypes from './CandyTypes';
import EmployeesManager from '../modules/EmployeesManager';
import LocationsManager from '../modules/LocationsManager';
import CandiesManager from '../modules/CandiesManager';
import CandyTypesManager from '../modules/CandyTypesManager';


class ApplicationViews extends Component{

state = {
    locations: [],
    employees: [],
    candyTypes: [],
    candies: []
};

deleteCandy = id => {
  return fetch(`http://localhost:5002/candies/${id}`, {
    method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:5002/candies`))
  .then(e => e.json())
  .then(candies => this.setState({
    candies: candies
  }))
}


componentDidMount(){
    const newState = {};
    return EmployeesManager.getAll()
    .then(parsedEmployees => {
      newState.employees = parsedEmployees;
      return LocationsManager.getAll()
    })
    .then(parsedLocations => {
      newState.locations = parsedLocations;
      return CandiesManager.getAll()
    })
    .then(parsedCandies => {
      newState.candies = parsedCandies;
      return CandyTypesManager.getAll()
    })
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
                    return <Candies deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
        </div>
    )
}

}

export default ApplicationViews;
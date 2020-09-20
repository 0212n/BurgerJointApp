import React,{Component} from 'react';
import Header from './Header'
import RestaurantList from './RestaurantList'
import '../styles/App.css';
import { Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component{
  render() {
    return (
        <div className="container">
          <h2>Welcome to Swiggy</h2>
          <RestaurantList/>
        </div>

    )
  }
}

export default App;

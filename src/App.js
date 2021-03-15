import './App.css';
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import AllPaintings from './allPaintings';
//import AllPaintins from './allPaintings.js'




class App extends Component {
  constructor(props) {
    super();
    this.state = {
      paintings: []
    }
  }
  //method to call bakend to get data
  //console.log(data)
  componentDidMount = () => {
    const url = 'http://localhost:3001/paintings'
    axios.get(url).then(response => {
      console.log(response.data.allPaintings)
      this.setState({
        paintings: response.data.allPaintings
      })
    })
  }

  render() {

    const paintings = this.state.paintings.map(painting => {
      return (
        <div className='gallery'>
            <a target="_blank" href={painting.pic1}>
              <img src={painting.pic1} alt="Farm House" />
            </a>
            <div className='desc'>{painting.title}</div>
          </div>
      )
  });

    return (
      <div className="app">
        <header>
          <h1>PTeel Originals</h1>
        </header>
        <div className='container'>
          {paintings}
        </div>
      </div>

    );
  }
}

export default App;

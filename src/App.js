import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import Show from './Show';
import Home from './Home';
import AboutMe from './AboutMe';
import Header from './Header';

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

       return (
      <div className="app">
        <Header></Header>
        <div className='container'>
      <Switch>
          <Route exact path='/' render={(routerProps) =>
            <Home {...this.state} {...routerProps} />
          }>
          </Route>

          <Route exact path='/show/:id' render={(routerProps) =>
            <Show {...this.state} {...routerProps} />
          }>
          </Route>
          <Route exact path='/aboutme/' component={AboutMe} />
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;

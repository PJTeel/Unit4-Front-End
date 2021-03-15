import './App.css';
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';




class App extends Component {
  //method to call bakend to get data
  //console.log(data)

  componentDidMount = () => {
    const url = 
  }

  render() {


  return (
    <div className="app">
        <header>
        <h1>PTeel Originals</h1>
        </header>
<div className='container'>     
<div className='gallery'>
  <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
    <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
    </a>
    <div className='desc'>Cobblestone farm house</div>
</div>

<div className='gallery'>
  <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
    <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
    </a>
    <div class='desc'>Wanna play ball?</div>
</div>

<div className='gallery'>
  <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
    <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
    </a>
    <div class='desc'>Hummingbird on coneflower</div>
</div>

<div className='gallery'>
  <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
    <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
    </a>
    <div class='desc'>Lab pup with tennis ball</div>
</div>

<div className='gallery'>
  <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
    <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
    </a>
    <div class='desc'>Owl</div>
</div>

</div> 
    </div>

  );
}
}

export default App;

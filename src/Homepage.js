import './App.css';
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';


function Homepage() {
  return (
    <div className="Homepage">
         <form className='Homepage-Form'>

<div className='Homepage-Fruit'>
    <h2 className='Homepage-Vegetable-Label' >Fruit</h2>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <label className='Search-Common-Name' >Chose a Fruit</label>
    
</div>

<div className='Homepage-Flower'>
    <h2 className='Homepage-Vegetable-Label' >Flower</h2>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <label className='Search-Common-Name' >Chose a Flower</label>
    
</div>

<div className='Homepage-Vegetable'>
    <h2 className='Homepage-Vegetable-Label' >Vegetable</h2>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <label className='Search-Common-Name' >Chose a Vegetable</label>
    
</div>

</form>
      
    </div>

  );
}

export default Homepage;

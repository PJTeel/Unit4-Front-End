import './App.css';
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';




function App() {
  return (
    <div className="app">
      <main className='Cards'>
        <header>
        <h1>PTeel Originals</h1>
        </header>
      
<div className='Card'>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <h2>Cobblestone farm house</h2>
    <button type="button">Details</button>
</div>

<div className='Card'>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <h2>Painting</h2>
    <button type="button">Details</button>
</div>

<div className='Card'>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <h2>Painting</h2>
    <button type="button">Details</button>
</div>

<div className='Card'>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <h2>Painting</h2>
    <button type="button">Details</button>
</div>

<div className='Card'>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <h2>Painting</h2>
    <button type="button">Details</button>
</div>

<div className='Card'>
    <img className='Homepage-Vegetable-Image' src="https://i.imgur.com/gd0YaAe.jpg" alt="Vegetable Image" /><br></br>
    <h2>Painting</h2>
    <button type="button">Details</button>
</div>

</main>
      
    </div>

  );
}

export default App;

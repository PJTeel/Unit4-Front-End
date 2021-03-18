import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import './Home.css';


class Home extends Component {

    render() {
        const paintings = this.props.paintings.map((value, index) =>
            <div key={index}>
                <Link to={`/show/${value.id}`}>
                    <div className='gallery'>
                        <img src={value.pic1} alt="{value.title}" />
                        <div className='desc'>{value.title}</div>
                    </div>
                </Link>
            </div>
        )
        return (
            <div className="app" >
                <h1>Miniature Oil Paintings</h1>
                <p>Sizes include: 3" x 3", 2" x 4" and 4" x 4"</p>
                <div className='container'>
                    {paintings}
                </div>
            </div>
        );
    }
}


export default Home;

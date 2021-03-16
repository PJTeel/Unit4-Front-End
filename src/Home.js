import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './App.css';



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
                <div className='container'>
                    {paintings}
                </div>
            </div>

        );
    }
}


export default Home;

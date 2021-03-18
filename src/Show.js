import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './Show.css';
import './App.css';


class Show extends Component {
    render() {

        let paintingId = this.props.match.params.id
        let PaintingDetail = this.props.paintings.find(value =>
            value.id == paintingId
        )

        return (
            <div className="text">
                {PaintingDetail ? <div>
                    <h2>{PaintingDetail.title}</h2>
                    <div className='showMain'>
                        <img className='show' src={PaintingDetail.pic1} />
                        <img className='show' src={PaintingDetail.pic2} />
                        <img className='show' src={PaintingDetail.pic3} />
                    </div>
                    <h3>Description:</h3>
                    <p>{PaintingDetail.description}</p>
                    <br></br>
                    <h3>Painting size:</h3>
                    <p>{PaintingDetail.size}</p>
                </div> : null}

            </div>
        );
    }
}

export default Show;
import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './Show.css';



class Show extends Component {
    render() {
        console.log(this.props)
        let paintingId = this.props.match.params.id
        let PaintingDetail = this.props.paintings.find(value =>
            value.id == paintingId
        )

        return (
            <div>
                {PaintingDetail ? <div>
                    <h2>{PaintingDetail.title}</h2>
                    <div className='showMain'>
                        <img className='show' src={PaintingDetail.pic1} />
                        <img className='show' src={PaintingDetail.pic2} />
                        <img className='show' src={PaintingDetail.pic3} />
                    </div>
                    <h3>Description:</h3>
                    <p>{PaintingDetail.description}</p>
                    <h3>Painting size:</h3>
                    <p>{PaintingDetail.size}</p>
                </div> : null}

            </div>
        );
    }
}

export default Show;
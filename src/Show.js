import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';



class Show extends Component {
    render() { console.log(this.props)
        let paintingId = this.props.match.params.id
        let PaintingDetail = this.props.paintings.find(value =>
            value.id == paintingId
        )
        console.log(PaintingDetail)
        return (
            <div>
                <h2>{PaintingDetail.title}</h2>
                <img className='showMain' src={PaintingDetail.pic1}/>
                <img className='showMain' src={PaintingDetail.pic2}/>
                <img className='showMain' src={PaintingDetail.pic3}/>
                <h3>Description:</h3>
                <p>{PaintingDetail.description}</p>
                <h3>Painting size:</h3> 
                <p>{PaintingDetail.size}</p>
                
                
            </div>
        );
    }
}

export default Show;
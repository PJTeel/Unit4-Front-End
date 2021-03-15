import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';


class Details extends Component {
    



render() {


return (
    <div>
        <div className='container-detail'>
            <br></br>
            <h1>painting name</h1>
            <br></br>
                <div className='gallery'>
                <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
                    <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
                </a>
                </div>
                <div class='desc'>Cobblestone farm house</div>
        </div>

            <div className='container-detail'>
                    <div className='gallery'>
                    <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
                        <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
                    </a>
                    </div>
                    <div class='desc'>Cobblestone farm house</div>
            </div>

                <div className='container-detail'>
                    <div className='gallery'>
                        <a target="_blank" href="https://i.imgur.com/gd0YaAe.jpg">
                            <img src="https://i.imgur.com/gd0YaAe.jpg" alt="Farm House" />
                        </a>
                        </div>
                    <div class='desc'>Cobblestone farm house</div>
                </div>
    </div>
);
}
}

export default Details;
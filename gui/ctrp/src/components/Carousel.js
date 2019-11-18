import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class CtRpCarousel extends Component{
    render() {
        return (
            <Carousel autoPlay dynamicHeight>
                <div>
                    <img src="./CTR-icon.png" height="250px"/>
                    <p className="legend" height="50px">Lengend1</p>
                </div>
                <div>
                    <img src="./CTR-icon.png" height="250px"/>
                    <p className="legend" height="50px">Lengend2</p>
                </div>
                <div>
                    <img src="./CTR-icon.png" height="250px"/>
                    <p className="legend" height="50px">Lengend3</p>
                </div>
            </Carousel>
        )
    }

}
export {CtRpCarousel};
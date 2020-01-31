import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class CtRpCarousel extends Component{
    render() {
        return (
            <Carousel autoPlay >
                <div>
                    <img class="carouselFormat img-rounded thumbnail" alt="..." src="../ctrpFrontElevation.png" />
                    <p className="legend" >Todos son Bienventidos!</p>
                </div>
                <div>
                <img class="carouselFormat frmt2Carousel img-rounded thumbnail" alt="..." src="../emausMay2020v3.png" />
                    <p className="legend" >Mayo 1 al 3, 2020</p>
                </div>
                <div>
                <img class="carouselFormat frmt3Carousel img-rounded thumbnail" alt="..." src="../knightsDinner.png" />
                    <p className="legend" >Diciembre 14, 2019</p>
                </div>
            </Carousel>
        )
    }

}
export {CtRpCarousel};
import React, { Component } from 'react'
import { OfertoryConsumer } from './Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <OfertoryConsumer>
                {value => {
                    const {id, company, img, info, price, title,inCart} = value.detailOfertory;
                    return(
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanded text-blue my-5">
                                    <h1>{title}</h1>
                                </div>

                            </div>

                            {/* Ofertory description*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="Donacion"/>
                                </div>
                            </div>

                            {/* Product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>Model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made by: <span className="text-uppercase">{company}</span>
                                </h4>
                            </div>
                            <h4 className="text-blue">
                                <strong>Price:<span>$</span>{price}</strong>
                            </h4>
                            <p className="text-capitalize font-weitght-bold mt-3 mb-0">
                                Informacion sobre donacion
                            </p>
                            <p className="text-muted lead">{info}</p>

                            {/* buttons */}
                            <div>
                                <Link to="/ofrendas">
                                    <ButtonContainer>
                                        Retornar
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer 
                                    Cart 
                                   disabled={inCart ? true:false} 
                                   onClick={()=>{
                                       value.addToCart(id)
                                   }}>
                                    {inCart ? "In Cart" : "Add to Cart"}
                                </ButtonContainer>
                            </div>
                        </div>
                    )
                }}
            </OfertoryConsumer>
        )
    }
}

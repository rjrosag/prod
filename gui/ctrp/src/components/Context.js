import React, { Component } from 'react'
import {churchDonation, detailDonation} from '../data';

const donationContext = React.createContext();
class donationProvider extends Component {
    state = {
        donation: churchDonation,
        detail: detailDonation
    };
    handleDetail = ()=> {
        console.log("hello from detail");
    };
    addToCart = ()=> {
        console.log("hello from add to cart");
    }
    render() {
        return (
            <donationContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}                
            </donationContext.Provider>
        )
    }
}
const donationConsumer = donationContext.Consumer;

export {donationProvider, donationConsumer };

import React, { Component } from 'react'
import {churchApeal, ofertoryDetail } from '../DbBuffer';

const OfertoryContext = React.createContext();

class OfertoryProvider extends Component {
    state = {
        ofertories : [],
        detailOfertory : ofertoryDetail
    };
    componentDidMount() {
        this.setOfertory();
    }
    
    setOfertory = () => {
        let tempDonation = [];
        churchApeal.forEach(( item)=>{
            const singleItem = {...item};
            tempDonation = [...tempDonation, singleItem];
        }); 
        this.setState(()=>{return {ofertories:tempDonation}});
    }
    getItem = (id) => {
        const ofertory = this.state.ofertories.find(item => item.id === id);
        return ofertory;
    }
    handleDetail = (id)=>{
        const ofertory = this.getItem(id);
        this.setState(()=>{
            return {detailOfertory:ofertory}
        })
    }
    addToCart = (id)=>{
        console.log(`Hello from add to cart the ID is: ${id}`)
    }
    render() {
        return (
            <OfertoryContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </OfertoryContext.Provider>
        )
    }
}

const OfertoryConsumer = OfertoryContext.Consumer;

export {OfertoryProvider, OfertoryConsumer};
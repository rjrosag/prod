import React, { Component } from 'react'
import Title from './Title';
import { OfertoryConsumer} from './Context';
import Ofertorial from './Ofertory';

export default class OfertoryList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Nuestras" title="Ofrendas"/>

                        <div className="row">
                            <OfertoryConsumer>
                                {donationObj =>{
                                    return donationObj.ofertories.map((donation)=>{
                                        return <Ofertorial key={donation.id} donation={donation}/>;
                                    })
                                }}
                            </OfertoryConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

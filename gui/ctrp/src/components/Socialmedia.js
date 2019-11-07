import React, { Component } from 'react'
import Title from './Title';
import {churchDonation} from '../data';
import {donationConsumer} from './Context';

export default class Socialmedia extends Component {
    state = {
        donation: churchDonation
    };
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="thanks for" title="donate" />
                        <div className="row">
                                
                        </div>
                    </div>
                </div>                
            </React.Fragment>
        );
    }
}

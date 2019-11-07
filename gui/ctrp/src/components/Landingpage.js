import React, { Component } from 'react'
import {Grid, Cell } from 'react-mdl';

export default class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landingpage_grid">
                    <Cell col={12}>
                       <img 
                           src="../../Public/commandment_10.jpg"
                           alt="10 Cmds"
                           className="cmd_10_img"
                       /> 
                       <div className="banner-text">
                           <h1>Link1</h1>
                       </div>  
                    </Cell>                    
                </Grid>                
            </div>
        )
    }
}

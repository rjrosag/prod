import React, { Component } from 'react'
import {Container, Row, Col, Visible} from 'react-grid-system';
import { mainContentTitleFormat, 
         subtitleContentFormat, 
         contentTitleFormat,
         contentLinkForwardFormat, 
         contentCreatorFormat, 
         contentFormat, contentLinkFormat } from './Card';
import { CtRpCarousel } from './Carousel';

export default class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Container fluid className='landingpage_grid'>
                    <Row>
                        <Col sm={1.5}>
                            <Visible xl>
                                <ul class='menu__list' >
                                    <li class='lpMenu__list-item'><a class='lpMenu__link'>About us</a></li>
                                    <li class='lpMenu__list-item'><a class='lpMenu__link'>Connect</a></li>
                                    <li class='lpMenu__list-item'><a class='lpMenu__link'>Members</a></li>
                                    <li class='lpMenu__list-item'><a class='lpMenu__link'>Our Pastor</a></li>
                                    <li class='lpMenu__list-item'><a class='lpMenu__link'>Our Vicar</a></li>
                                    <li class='lpMenu__list-item'><a class='lpMenu__link'>Pastoral Plan</a></li>
                                    <li class='lpMenu__list-item'><a class='lpMenu__link'>Calendar</a></li>
                                </ul> 
                            </Visible>                            
                        </Col>
                        <Col sm={8} xs={8} lg={8}> 
                            <CtRpCarousel />
                            <div>
                                <mainContentTitleFormat>Sunday, November 17</mainContentTitleFormat>
                                <contentLinkForwardFormat className="float-right">Forward</contentLinkForwardFormat><br/>
                                <subtitleContentFormat>Robinson, here what you need to know today.</subtitleContentFormat>
                                <div className="cardBgPicture pt-5">
                                    <contentTitleFormat>When meetings are a form of therapy</contentTitleFormat><br/>
                                    <contentCreatorFormat>By:Robinson Rosa, Web Designer</contentCreatorFormat><br/>
                                    <contentFormat>While a few important decisions are made along the meetings, they can sometimes motivate workers by giving them a chance to vent to their peers, according to a study from Sweden's Malmo University.</contentFormat><br/>
                                    <contentLinkFormat>See other 8 featured conversations</contentLinkFormat>
                                </div>
                            </div>                           
                        </Col>
                        <Col sm={2.5}>
                            <Visible xl>                                
                                <img src="./CTR-icon.png" className="cmd_10_img"
                                    alt="10 Commandments"                                                                      
                                />
                            </Visible>
                            
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

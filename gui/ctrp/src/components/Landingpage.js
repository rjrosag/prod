import React, { Component } from 'react'
import {Container, Row, Col, Visible} from 'react-grid-system';
import { mainContentTitleFormat, 
         subtitleContentFormat, 
         contentTitleFormat,
         contentLinkForwardFormat, 
         contentCreatorFormat, 
         contentFormat, contentLinkFormat } from './Card';
import { CtRpCarousel } from './Carousel';
import CtRpNavCol from './NavCol';
import CtRpBillboard from './Billboard';

export default class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Container fluid className='landingpage_grid'>
                    <Row>
                        <div>
                            <img class="img-rounded thumbnail" alt="..." src="../ctrpNameNomination.jpg" />
                        </div>
                        <div className="frameCarousel">
                            <CtRpCarousel />
                        </div>
                    </Row>
                    <Row>
                        <Col sm={1.5}>
                            <Visible xl>
                                <CtRpNavCol />
                            </Visible>                            
                        </Col>
                        <Col sm={8} xs={8} lg={8}> 
                            
                            <div>
                                <mainContentTitleFormat>Miercoles, Noviembre 27</mainContentTitleFormat>
                                <contentLinkForwardFormat className="float-right">Forward</contentLinkForwardFormat><br/>
                                <subtitleContentFormat>Hermandad de Emaus</subtitleContentFormat>
                                <div className="cardBgPicture pt-5">
                                    <contentTitleFormat>Si estas lleno de cosas materiales, simplifica tu vida con Emaus</contentTitleFormat><br/>
                                    <contentCreatorFormat>By:Rerto Carlos Padilla, Vicario</contentCreatorFormat><br/>
                                    <contentFormat><br/>Una de las metas de nuestra parroquia es formar la Hermandad de Emaús la cual es una comonidad de hermanos, quienes a través de una experiencia de encuentro personal con JESUS RESUCITADO, han decido seguirle, servirle en Su IGLESIA, y ser agentes de cambio y transformación del mundo.  Toda persona laica y/o religiosa no católica o de otras confesiones.   Todos necesitamos experimentar el amor de Dios en nuestras vidas.<br/> 

<br/>Emaús es un camino de peregrinaje.  Así es nuestra vida de fe.   Se trata de encontrase con Jesús al que tantas veces no lo reconocemos en nuestra vida tan vacía y tan llena de cosas materiales.<br/> 

<br/>Un paso para pertenecer a esta hermandad es asistir a un retiro que se llevará a cabo en las siguientes fechas:<br/> 

    Mayo 1 al 3, 2020 – hombres. <br/>

    Agosto 21al 23, 2020 0 mujeres. <br/>

<br/>Si estás interesado en participar, favor de contactar a: <br/>

    Secretaria de Emaus, (201) 452.6214 <br/>

    Coordinación de Emaus, (954) 397.0757 <br/>

    Oficina Parroquial, (609) 261.0181<br/></contentFormat><br/>
                                    <contentLinkFormat>Vea otros 0 conversaciones presentadas</contentLinkFormat>
                                </div>
                            </div>
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
                                <CtRpBillboard />
                            </Visible>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

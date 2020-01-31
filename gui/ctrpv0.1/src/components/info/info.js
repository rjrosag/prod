import React from 'react';
import bg from '../../img/bg-shape.svg';
import './info.css';

const info = (props) => {
    // props.tempSymbol
    // props.setTempSymbol
    return(
        <section>
            <img src={ bg } alt="Background shape" id="bg" />
            <h1>IGLESIA CATOLICA CRISTO<br/><span>REDENTOR</span></h1>
            <hr/>
            <p>
                426 Pine St, Mount Holly, NJ 08060<br/>
                Tel:(609) 261-0181 Fax: (609) 702-0017<br/>
                E-mail: mhollyparish@yahoo.com 
            </p>
            <div className='bottom'>
                <p> El clima esta siendo mostrado en la escala:</p>
                <div className='buttons'>
                    <div className='btn'>
                    {props.tempSymbol === "C" ?
                        <button className='clicked'>C</button>
                    :
                        <button onClick={props.setTempSymbol}>C</button>
                    }
                        <p>Celsius</p>
                    </div>
                    <div className='btn'>
                    {props.tempSymbol === 'F' ?
                        <button className='clicked'>F</button>
                    :
                        <button onClick={props.setTempSymbol}>F</button>
                    }
                        <p>Fareheit</p>
                    </div>
                </div>
            </div>
            <div className='Misa'>
                <hr/>
                <p>
                    <h3>Misas:</h3><br/>
                    Dom       8:00 & 10:00 AM Espanol<br/>
                    Sun      12:00 PM English<br/>
                    Mar/Tues  9:00 AM Espanol<br/>
                    Mier/Wed  7:00 PM Espanol<br/>
                    Vier/Fri  9:00 AM Espanol<br/>
                    Vier/Fri  7:00 PM (Primer viernes del mes
                                      Misa carismatica) Espanol<br/>
                    Sab/Sat   6:00 PM Confesiones/Confesions<br/>
                    Sab/Sat   7:00 PM Espanol<br/>
                </p>
            </div>
        </section>
    );
}

export default info;
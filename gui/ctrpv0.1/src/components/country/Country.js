import React from 'react';
import './Country.css';
import sun from '../../img/sun-icon.svg';
import snow from '../../img/snow-icon.svg';
import ca from '../../img/ctrpLPage01.jpg';
import ru from '../../img/ctrp-vicar.jpg';

const Country = (props)=> {
    let currentTemp = 0;

    if (props.cities) {
        let farentheit = parseInt(props.cities.main.temp);
        let celsius = parseInt((farentheit - 32) * (5/9));

        if (props.tempSymbol === 'F') {
            currentTemp = farentheit;
        } else {
            currentTemp = celsius;
        }
    }

    return(
        <section>
            <div className='country'>
                {props.cities && props.cities.name === 'Laurel' ?
                    <div>
                        <p>Mount Holly</p>
                        <p>NEW JERSEY</p>
                    </div>
                    :
                    <div>
                        <p>Mount Holly</p>
                        <p>NEW JERSEY</p>
                    </div>
                    }
            </div>
            <div className='floater'>
                <div className='icon-temp'>
                    {props.cities && props.cities.name === 'Laurel' ?
                        <img src={sun} alt='Sunny'/>
                        :
                        <img src={snow} alt='Snow'/>
                    }
                    <p id='temp'>{props.cities ? currentTemp : ''}°</p>
                </div>
                <p>{props.cities ? props.cities.weather[0].main.toUpperCase() :''}</p>
            </div>
            {props.cities && props.cities.name === 'Laurel' ?
                <img src={ca} alt='California' id='country-img' />
                :
                <img src={ru} alt='Moscow' id='country-img' />
            }
        </section>
    );
}

export default Country;
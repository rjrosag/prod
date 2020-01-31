import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Info from './components/info/info';
import Country from './components/country/Country';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Ofertory from './components/OfertoryList';
import Details from './components/Details';
import Default from './components/Default';
// import Boletin from './components/Boletin';

const App = ()=> {
  let [tempSymbol, setTempSymbol] =  useState('F')
  const [cities, setCities] = useState([])
  
  // Using API
  useEffect(()=>{
    (async function fetchData() {
      const response = await fetch('http://api.openweathermap.org/data/2.5/group?id=5124059,5368361,524901&units=imperial&appid=40af4c7a896866ecce136a32e66d7f74');
      const data = await response.json();
      setCities(data.list);
      console.log(data.list);
    })(); 
  }, []);

  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <Switch>
          <Route exact path="/">
            <div className="col-6">
                <Info tempSymbol={ tempSymbol } setTempSymbol={()=>{setTempSymbol(tempSymbol === 'F' ? 'C' : 'F')}}/>
            </div>
            <div className="col-6">
                <Country cities = {cities[0]} tempSymbol= {tempSymbol} />
                {/* <Country cities = {cities[1]} tempSymbol= {tempSymbol} /> */}
            </div>
          </Route>
          {/* <Route path="/boletin">
            <Boletin />
          </Route> */}
          <Route path="/ofertory">
            <Ofertory />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route component={Default} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

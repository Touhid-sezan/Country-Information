import React, { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';
import FavouriteCountries from './Components/FavouriteCountries/FavouriteCountries';

function App() {
 const [country, setCountry] = useState([]);
const [ favouriteCountries, setFavouriteCountries] = useState([]);

 useEffect( () => {
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data => setCountry(data))
 }, []) 

 const addCountry = (country) => {
      const newFavouriteCountries = [...favouriteCountries, country]
      setFavouriteCountries(newFavouriteCountries)
 }

  return (
    <div>
      <FavouriteCountries favouriteCountries={favouriteCountries}></FavouriteCountries>
      <h1>Total Country Loaded: {country.length} </h1>
      {
        country.map(country => <Countries country={country} addCountry={addCountry} key={country.numericCode}></Countries> )
      }
    </div>
  );
}

export default App;

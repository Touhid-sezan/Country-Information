import React from 'react';
import './FavouriteCountries.css';

const FavouriteCountries = (props) => {
    const favouriteCountries = props.favouriteCountries;
    // let totalPopulation = 0;
    // for (let i = 0; i < favouriteCountries.length; i++) {
    //     const country = favouriteCountries[i];
    //     totalPopulation = totalPopulation + country.population;
        
    // }
    const totalPopulation = favouriteCountries.reduce((sum, country) => sum + country.population,0);
    const favCName = favouriteCountries.reduce((sum, country) => sum + "*" +country.name + ", ", "");


    return (
        <div className="favourite-section">
            <h1>Your Favourites</h1>
            <h2>Your favourite countries name :{favCName} </h2>
            <h3>Your total favourite countries: {favouriteCountries.length}</h3>
            <p>Your total favourite Countries population: {totalPopulation}</p>
        </div>
    );
};

export default FavouriteCountries;
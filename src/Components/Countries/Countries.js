import React from 'react';
import './Countries.css';
const Countries = (props) => {
    const {name, capital, flag, population} = props.country;
    const addCountry = props.addCountry;
    return (
        <div className="card">
            <img src={flag} alt=""/>
            <h1>Country Name: {name}</h1>
            <h2>Capital Name: {capital}</h2>
            <h5>Population of {name} is: {population} </h5>
            <button className="favourite-btn" onClick={() => addCountry(props.country)}>At to your favourites</button>
        </div>
    );
};

export default Countries;
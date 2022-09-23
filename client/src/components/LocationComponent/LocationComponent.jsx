import React, { useState, useEffect } from 'react'
import "./LocationComponent.css"

const LocationComponent = () => {

    const [data, setData] = useState({})

    const getCurrentLocation = (position) => {
        let {latitude, longitude} = position.coords;

        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a2324641ef16447282c0287d1795301e`)
        .then(response => response.json()).then(result => {
            let allDetails = result.results[0].components;
            let {city, state, postcode, country} = allDetails;
            setData({city,state, postcode, country})
        })
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getCurrentLocation);
    }, []);


  return (
    <div className='main-component'>
        <h1>Your Location</h1>
        <div className="location">
            <h2>{data.city}, </h2>
            <h2>{data.state},</h2>
            <h2>{data.postcode},</h2>
            <h2>{data.country}</h2>
        </div>
    </div>
  )
}

export default LocationComponent
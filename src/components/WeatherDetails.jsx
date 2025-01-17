import React, { useState } from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const WeatherDetails = ({
  temperatureCelsius,
  temperatureF,
  weatherCondition,
  weatherIcon,
  cityName,
  countryName,
  humidity,
  wind,
  pressure,
  visibility,
  latitude,
  longitude,
  maxitemp,
  minitemp,
  feelslike,
  
}) => {

  // const [fav, setFav] = useState("");

  //   const favCity = () => {
  //     setFav(cityName)
  //   }


  return (
    <div>
      <div className="current-details">
        <h3>Current weather</h3> 
        ||
        <h3>{new Date().toLocaleTimeString()}</h3>
      </div>

      <div className="weather-details">
        <h1>{temperatureCelsius}</h1>||
        <h1>{temperatureF}</h1>||
        <h2>{weatherCondition}</h2>
        <img
          src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
          alt="Weather Icon"
          className="weather-imag"
        />
      </div><hr/>

      <div className="city-name">

      {/* <div className='heart-icon'>
        <p><h4>Favorite City(Click on the heart icon below) =  </h4>{fav}</p>
        <FavoriteBorderIcon onClick={favCity}  />
      </div><hr/> */}

        <h1>{`${cityName}, ${countryName}`}</h1>
      </div><hr/>

      <div className="box">
        <div className="box-items">
          <div className="box-item-2">
            <OpacityTwoToneIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{humidity}</h3>
              <h3>Humidity</h3>
            </div>
          </div>
        </div>

        <div className="box-items">
          <div className="box-item-2">
            <AirTwoToneIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{wind}</h3>
              <h3>Wind</h3>
            </div>
          </div>
        </div>

        <div className="box-items">
          <div className="box-item-2">
            <CompareArrowsTwoToneIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{pressure}</h3>
              <h3>Pressure</h3>
            </div>
          </div>
        </div>

        <div className="box-items">
          <div className="box-item-2">
            <VisibilityIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{visibility}</h3>
              <h3>Visibility</h3>
            </div>
          </div>
        </div>        
      </div><br></br>

      <div className="box">

      <div className="box-items">
          <div className="box-item-2">
            <MyLocationIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>Lat. {latitude}</h3>
              <h3>Lon. {longitude}</h3>
            </div>
          </div>
        </div>
      <div className="box-items">
          <div className="box-item-2">
            <ThermostatIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{maxitemp}</h3>
              <h3>Max. Temp</h3>
            </div>
          </div>
        </div> 
        <div className="box-items">
          <div className="box-item-2">
            <ThermostatIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{minitemp}</h3>
              <h3>Min. Temp</h3>
            </div>
          </div>
        </div>  
        <div className="box-items">
          <div className="box-item-2">
            <AcUnitIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{feelslike}</h3>
              <h3>Feels Like</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
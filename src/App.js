import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListMap from './components/ListMap';
import { getPlacesData } from './api';
// import { Type } from 'ajv/dist/compile/util';
// import { getHotelsData } from './apii';
// import { getHotelsData } from './api';





function App() {
  const [places, setPlaces] = useState([]);
  const [hotelss, setHotelss] = useState([]);

  // const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('restaurants');
  // const [hotels, setHotels] = useState([]);

  console.log(type);

  // Get user location on initial load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (error) => console.error("Error getting location:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  // let url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  // Fetch places data when bounds update
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      const timer = setTimeout(() => {
        getPlacesData(bounds.sw, bounds.ne).then((data) => {
          setPlaces(data);
        });


        // getHotelsData(bounds.sw, bounds.ne).then((data) => {
        //   setHotelss(data);
        // });

      }, 500);

      return () => clearTimeout(timer);
    }

  }, [bounds]);


  // useEffect(() => {
  //   if (bounds.sw && bounds.ne) {
  //     const timer = setTimeout(() => {
        


  //       getHotelsData(bounds.sw, bounds.ne).then((data) => {
  //         setHotelss(data);
  //       });

  //     }, 500);

  //     return () => clearTimeout(timer);
  //   }

  // }, [bounds]);



  // Log state changes for debugging
  useEffect(() => {
    console.log("Places:", places);
    console.log("Coordinates:", coordinates);
    console.log("Bounds:", bounds);
  }, [places, coordinates, bounds]);

  let place = places.filter((p) => p.name);
  // let hotel = hotels.filter((h) => h.name);


  return (
    <>
    
        <Header />.
        <h1 style={{ color: 'red' } }>----------------------PROJECT IS UNDER DEVELOPMENT ONLY----------------------------</h1>
        <br/>
        <ListMap
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          places={place}l
          hotel = {hotelss}
          setType={setType}
          // hotels={hotel}
        />

    </>
  );
}

export default App;





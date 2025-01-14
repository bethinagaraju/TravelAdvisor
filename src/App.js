import React , { useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import ListMap from './components/ListMap';
// import Map from './components/Map';

import { getPlacesData } from './api';


function App() {

    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
    const [bounds, setBounds] = useState(null);


    ///////////////
    // const specificCenter = { lat: -34.92873, lng: 138.60075 }; // Replace with your desired location
    // <MyComponent center={specificCenter} />
    //////

    //FOR FETTING USER LATITUDE AND LONGITUDE

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords}) => {
          setCoordinates({lat:coords.latitude, lng: coords.longitude});
      })
   }, []);



    useEffect(() => {
        console.log(coordinates, bounds);

      getPlacesData()
        .then(
          (data) => {
            console.log(data);
            setPlaces(data);
          }
        )
    },[coordinates, bounds]);

  return (
    <>
    <Header/>
    <ListMap
     coordinates = {coordinates}
     setCoordinates={setCoordinates}
     setBounds={setBounds}
     /> 
    {console.log(places)}

  </>
  );
}

export default App;



import React, { useEffect, useState, createContext, useContext, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import ListMap from './components/ListMap';
import { getPlacesData } from './api';

    

const RateContext = createContext();
const cContext = createContext();

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary');
  const [rate, setRate] = useState("ALL");
  const firstrendor = useRef(true);

  const [near, setNear] = useState(0);

  const[loc, setLoc] = useState(0);
  let f=0;

  const[swBounds, setSwBounds] = useState({ lat: '0', lng: '0' });
  const[neBounds, setNeBounds] = useState({ lat: '0', lng: '0' });
  console.log(type);

  useEffect(() => {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude });

          const bounds = {
            sw: { lat: latitude - 0.01, lng: longitude - 0.01 },
            ne: { lat: latitude + 0.01, lng: longitude + 0.01 },
          };

          setSwBounds(bounds.sw);
          setNeBounds(bounds.ne);
          setBounds(bounds);


        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    }, 2);
  }, [near]);

 
  


  useEffect(() => {
    console.log("Places:", places);
    // console.log("Hotels:", hotels);
    console.log("Coordinates:", coordinates);
    console.log("Bounds:", bounds);
    console.log("RATING TEST",rate);
    console.log("Location",loc);
    console.log("swBOUNDS",swBounds);
    console.log("neBOUNDS",neBounds);
  }, [places, coordinates, bounds, rate,loc]);

  // let place = places.filter((p) => p.name);

  let place = places.filter((p) => p.name); 



  if (rate !== "ALL") {
    if(rate === "100"){
      place = places.filter((p) => p.name); 
    }
    else{
      place = place.filter((p) => parseFloat(p.rating) == parseFloat(rate));
    }
  }




  useEffect(() => {
    if (loc !== "" && loc !== null) {
      const fetchLocation = async () => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${loc}&format=json`);
          const data = await response.json();
  
          if (data.length > 0) {
            const location = data[0];
            const lat = Number(location.lat);
            const lng = Number(location.lon);
  
            const bounds = {
              sw: { lat: Number(data[0].boundingbox[0]), lng: Number(data[0].boundingbox[2]) },
              ne: { lat: Number(data[0].boundingbox[1]), lng: Number(data[0].boundingbox[3]) },
              // sw: { lat: lat - 0.01, lng: lng - 0.01 },
              // ne: { lat: lat + 0.01, lng: lng + 0.01 },
            };
  
            setCoordinates({ lat, lng });
            setSwBounds(bounds.sw);
            setNeBounds(bounds.ne);
            setBounds(bounds);
          } else {
            console.error("Location not found!");
            window.alert("Location not found!");
          }
        } 
        catch (error) {
          console.error("Error fetching location data:", error);
          // window.alert("Error fetching location data: " + error.message);
        }
      };
  
      fetchLocation();
    }
  }, [loc]);
  
  // 🛠️ This useEffect runs AFTER bounds are updated, ensuring API call gets the correct data
  useEffect(() => {
    if (swBounds && neBounds && swBounds.lat !== "0" && neBounds.lat !== "0") {
      console.log("Fetching places with updated bounds...");
      
      const fetchPlaces = async () => {
        try {
          const data = await getPlacesData(swBounds, neBounds, type);
          setPlaces(data);
        } catch (error) {
          console.error("Error fetching places data:", error);
        }
      };
  
      fetchPlaces();
    }
  }, [swBounds, neBounds, type]);

   



  return (
    <RateContext.Provider value={{ rate, setRate}}>
    <Header setLoc={setLoc} setNear={setNear} near={near}/>  
    <ListMap
      coordinates={coordinates}
      setCoordinates={setCoordinates}
      setBounds={setBounds}
      places={place}
      setType={setType}
      loc={loc}
    />
  </RateContext.Provider>
  );
}

export default App;
export { RateContext };



import React, { useContext, useEffect, useState} from 'react';
import './List.css';
import './ListMap.css';
import { RateContext } from '../App';


function List(props) {

 
  const { rate, setRate } = useContext(RateContext);
  console.log("///////////////");
  console.log(props.places);
  console.log("///////////////");

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setRefreshKey(refreshKey + 1);
    console.log("------------------------------------------------------->CALLING REFRESHING FUNCION()");
  },[props.loc])  

  function changeType(indx){
    if(indx===1){
      document.getElementById("list-heading").innerHTML="Food & Dining";
      props.setType('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary');
      
      
    }

    if(indx===2){
      document.getElementById("list-heading").innerHTML="Hotels";
      
      props.setType('https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary');
    }

    if(indx===3){
      document.getElementById("list-heading").innerHTML="Attractions";
 
      props.setType('https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary');
    }

  }

  function star(indx){

      if (indx === "5.0") {
          return"★ ★ ★ ★ ★"
      }
      if (indx === "4.0") {
          return "★ ★ ★ ★";
      }
      if (indx === "3.0") {
          return "★ ★ ★";
      }
      if (indx === "2.0") {
          return "★ ★";
      }
      if (indx === "1.0") {
          return "★";
      }

      if(indx === "4.5"){
          return "★ ★ ★ ★ ☆";
      }

      if(indx === "3.5"){ 
          return "★ ★ ★ ☆ ";
      }

      if(indx === "2.5"){
          return "★ ★ ☆ ";
      }
  }

  



  return (
    <div style={{backgroundColor:"#F4FFC3"}} className='ListContainer'>
      <div className="container" key={refreshKey}>
     
          
 
    <div style={{ color: "#809D3C" }} id="list-heading">
      {`Food & Dining`}
    </div>


<div className='List-container-2'>
<div className='ll'>
     
      
      <div className="btn-group">
        <button type="button"  onClick={()=>{changeType(1)}}>Restaurants</button>
        <button type="button" onClick={()=>{changeType(2)}}>Hotels</button>
        <button type="button"  onClick={()=>{changeType(3)}}>Attractions</button>

        <select id="rating">
          <option value="" onClick={()=>{setRate("100")}}>ALL</option>
          <option value="5" onClick={()=>{setRate("5.0")}}>5 Stars</option>
          <option value="4.5" onClick={()=>{setRate("4.5")}}>4.5 Stars</option>
          <option value="4" onClick={()=>{setRate("4")}}>4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
      </select>
      </div>
      <div>
      
      </div>
  </div>

        
  </div>

</div>


{/* MAPING ALL THE SPACES */}

<div className='places' >


  {props.places.map((place, index) => (

    <li key={index}>
      <div className='placeCard' >



          <div className='placeImage'>
                <img className='placeImage2' src={place.photo?.images?.large?.url || 'https://www.budget101.com/images/image-not-available.png?13663'} alt='' />
          </div>

  

        <h6 className='placeName'>{place.name}</h6>

        <div className='Rating'>
          <span>
            {star(place.rating)}
            { place.rating}</span>
          <span>{place.num_reviews} reviews</span>
        </div>

    
       

        <div className='Ranking'>
              <span>Ranking</span>
              <span>{place.ranking}</span>
        </div>

        <div className='Cusine'>
          {place.cuisine && place.cuisine.map((cuisine, index) => (
            <span className='cuisine-name' key={index}>{cuisine.name}</span>
          ))}
        </div>

        <div className='address'>
              <span>{place.address}</span>
        </div>

        <div className='phone'>  
              <span>&#128383;  {place.phone}</span>
              <span></span>
        </div>

        <a
    href={`https://www.google.com/maps/place/${place.latitude},${place.longitude}`}
    target="_blank"
    rel="noopener noreferrer"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'  }}>
    <img style={{ width: '20px', height: '20px' }} src="direction.png" alt="Directions" /> <span style={{ style: 'none', marginLeft: '5px' , color: 'blue',fontSize: '12px'}}>Directions</span>
    </div>
    </a>

        <div className='open_now_text'>  
          <span className='open_now_text' style={{color: place.open_now_text === "Closed Now" ? "red" : "green"}}>{place.open_now_text}</span>          
        </div>

      

<div className='website'>
          <span className='tripadvisor' onClick={() => window.open(place.web_url)}>TRIP ADVISOR</span>
          <span className='website' onClick={() => window.open(place.website)}>WEBSITE</span>
  </div>

  <div className='booking'>
        

      {place.reserve_info?.url && (
  <button
    className="booking-button"
    onClick={() => window.open(place.reserve_info.url, "_blank")}
  >
    Reserve Table
  </button>
)}
</div>
      
      </div>
    </li>
  ))}
 
    </div>

    </div>
  );
}

export default List;










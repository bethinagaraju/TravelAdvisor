/*************  ✨ Codeium Command 🌟  *************/
import React from 'react';
import './List.css';
import './ListMap.css';
// import P from './placedetails/placedetailss.js';




function List(props) {

  console.log("///////////////");
  console.log(props.places);
  console.log("///////////////");




  //////////////// FOOD API LOADING




  
  function changeType(indx){
    if(indx===1){
      document.getElementById("list-heading").innerHTML="Food & Dining around you";
      
    }

    if(indx===2){
      document.getElementById("list-heading").innerHTML="Hotels around you";
      props.setType("Hotels");
    }

    if(indx===3){
      document.getElementById("list-heading").innerHTML="Attractions around you";
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
    <div className='ListContainer'>
      <div className="container">
     
            <div>
  <div>
    <br></br>
    <div id='list-heading'>Food & Dining around you</div>
    {/* <div>
      <button>Type</button>
      <div>
        <a>Restaurants</a>
        <a>Hotels</a>
        <a>Attractions</a>
      </div>
    </div> */}


<div className='List-container-2'>
<div className='list-type'>
      <label for="rating">Type</label>
      <br></br>
      
      <select id="rating">
          <option value="5" onClick={()=>{changeType(1)}}>Restaurants</option>
          <option value="4" onClick={()=>{changeType(2)}}>Hotels</option>
          <option value="3" onClick={()=>{changeType(3)}}>Attractions</option>
      </select>
  </div>

        <div className='list-rating'>
          <br></br>
      <label for="rating">Rating</label>
      <select id="rating">
          <option value="">ALL</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
      </select>
  </div>
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
        {/* <img className='placeImage2' src='https://foodish-api.com/images/samosa/samosa7.jpg' alt=''></img> */}
       <img className='placeImage2' src={place.photo.images.large.url} alt=''></img>
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

        <div className='open_now_text'>  

          <span className='open_now_text' style={{color: place.open_now_text === "Closed Now" ? "red" : "green"}}>{place.open_now_text}</span>

           
        </div>

      

<div className='website'>
          <span className='tripadvisor' onClick={() => window.open(place.web_url)}>TRIP ADVISOR</span>
          <span className='website' onClick={() => window.open(place.website)}>WEBSITE</span>
  </div>

  <div className='booking'>
          {/* <button className='booking-button'>Reserve Table</button>
      </div> */}

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






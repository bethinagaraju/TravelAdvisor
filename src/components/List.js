import React from 'react';
import './List.css';
import './ListMap.css';
import P from './placedetails/placedetailss.js';



function List() {
  const places = [
    { name: 'DURGA WINES' },
    { name: 'KPHB' },
    { name: 'VANGAPAD' },
    { name: 'BANQUET' },
    { name: 'DURGA WINES' },
    { name:  'mefhil'},
    { name: 'DURGA WINES' },
    { name: 'KPHB' },
    { name: 'VANGAPAD' },
    { name: 'BANQUET' },
    { name: 'DURGA WINES' },
    { name:  'mefhil'},
    { name: 'KPHB' },
    { name: 'VANGAPAD' },
    { name: 'BANQUET' },
    { name: 'DURGA WINES' },
    { name:  'mefhil'},
    { name: 'KPHB' },
    { name: 'VANGAPAD' },
    { name: 'BANQUET' },
    { name: 'DURGA WINES' },
    { name:  'mefhil'},
    { name: 'DURGA WINES' },
    { name: 'KPHB' },
    { name: 'VANGAPAD' },
    { name: 'BANQUET' },
    { name: 'DURGA WINES' },
    { name:  'mefhil'},
    { name: 'KPHB' },
    { name: 'VANGAPAD' },
    { name: 'BANQUET' },
    { name: 'DURGA WINES' },
    { name:  'mefhil'},
    { name: 'KPHB' },
    { name: 'VANGAPAD' },
    { name: 'BANQUET' },
    { name: 'DURGA WINES' },
    { name:  'mefhil'},
    { name: 'KPHB' },
  ];

  function changeType(indx){
    if(indx===1){
      document.getElementById("list-heading").innerHTML="Food & Dining around you";
    }

    if(indx===2){
      document.getElementById("list-heading").innerHTML="Hotels around you";
    }

    if(indx===3){
      document.getElementById("list-heading").innerHTML="Attractions around you";
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
<br></br>

{/* MAPING ALL THE SPACES */}

<div className='places'>

      {places.map((place, indx) => (
        <P name={place.name} key={indx} />
      ))}
    </div>

    </div>
  );
}

export default List;


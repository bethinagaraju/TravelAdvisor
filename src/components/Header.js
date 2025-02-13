// Header.js
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLifeRing} from '@fortawesome/free-solid-svg-icons';


import './Header.css';  // Import the Header.css file


function Header(props) {

    const [search, setSearch] = useState("");
    

    
    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent page refresh
        console.log("Calling search button...");
        console.log("calling search buttonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"+search);
        props.setLoc(search);
    };

    const liveLoc = async (event) => {
      let randNumber = Math.floor(Math.random() * 10000) + 1;
      event.preventDefault();
      props.setNear(randNumber+1);
      console.log("calling live location buttonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"+randNumber);
      setSearch("");  // Reset the search input value to empty string
    }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          {/* Travel Adviser Title */}

          
          <span className="navbar-brand" style={{color: "white", fontSize: "30px", fontWeight: "700"}} >
            TRAVEL ADVISOR
          </span>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}} className="navbar-search-form">
            {/* Search Box with Bootstrap Icon */}
            <form className="d-flex" role="search">
              {/* Search Input */}

              <button className="live" onClick={liveLoc}>
                
                near by you
              </button>

              <input id='inpt' style={{marginTop: "7px"}}
                className="form-control navbar-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* Bootstrap Search Icon */}
              <button onClick={handleSearch} className="btn navbar-search-button" type="submit">
            
                <i className="bi bi-search"></i>
              
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

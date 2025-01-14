// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';  // Import the Header.css file

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          {/* Travel Adviser Title */}
          <span className="navbar-brand navbar-title">
            Travel Adviser
          </span>

          <div className="navbar-search-form">
            {/* Search Box with Bootstrap Icon */}
            <form className="d-flex" role="search">
              {/* Search Input */}
              <input
                className="form-control navbar-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* Bootstrap Search Icon */}
              <button className="btn navbar-search-button" type="submit">
                <i className="bi bi-search"></i> {/* Bootstrap 5 search icon */}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

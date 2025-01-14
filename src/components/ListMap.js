import React from 'react';
import List from './List';
import Map from './Map';
import './ListMap.css';

function ListMap(props) {
  return (
    <div>
      <div className='list-map-container'>
        <div className='Listcontainer'>
            <List/>
        </div>
        <div className='Map-container'>
            <Map center={props.coordinates}/>
        </div>
      </div>
    </div>
  );
}

export default ListMap;

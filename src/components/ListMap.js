import React from 'react';
import List from './List';
import Map from './Map';
import './ListMap.css';

function ListMap(props) {
  return (
    <div>
      <div className='list-map-container'>
        <div className='Listcontainer'>
            <List places={props.places} setType={props.setType} />
        </div>
        <div className='Map-container'>
            <Map places={props.places} center={props.coordinates} setBounds={props.setBounds}/>
        </div>
      </div>
    </div>
  );
}

export default ListMap;

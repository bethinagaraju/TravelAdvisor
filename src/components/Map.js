import React from 'react'
import { GoogleMap, useJsApiLoader, InfoWindow} from '@react-google-maps/api'
import './Map.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons'


const containerStyle = {
  backgroundColor: '#F4FFC3',
  width: '60vw',
  height: '90.65vh',
}

function MyComponent(props) {

  console.log(props.places);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDdFlkrnTU5rNIbe3aWRiKJQnRUpa_7FtI',
  })

  // eslint-disable-next-line
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const center = {
      lat: 0,
      lng: 0,
    };
    if (props.coordinates) {
      center.lat = parseFloat(props.coordinates.lat);
      center.lng = parseFloat(props.coordinates.lng);
     
    }
    else{
      
    }
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [props.coordinates])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  const onBoundsChanged = () => {
    if (map) {
        const bounds = map.getBounds();
        if (bounds) {
            props.setBounds({
                ne: { lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng() },
                sw: { lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng() },
            });
        }
    }
};

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
      margin={[50, 50, 50, 50]}
      onBoundsChanged={onBoundsChanged}
      // options={{
      //   timeout: 500,
      // }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      
      {props.places.map((place, i) => (

  // <Marker
  //   key={i}
  //   position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
  //   label={place.name}
  //   icon={{
  //     url: place.photo?.images?.large?.url || 'https://media-cdn.tripadvisor.com/media/photo-w/0f/5d/cc/e0/buffet.jpg',
  //     scaledSize: new window.google.maps.Size(60, 60),
  //   }}
  // >
  // </Marker>


  <InfoWindow
  position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
  onCloseClick={() => console.log("Closed")}
>
  <div className='placeWindow'>
  <img src={place.photo?.images?.large?.url} width="100" />
    <h3 color='black'>{place.name}</h3>
    {/* <h3>{place.open_now_text}</h3> */}
    
    <h3 style={{color: place.open_now_text === 'Open Now' ? 'green' : place.open_now_text === 'Closed Now' ? 'red' : ''}}>{place.open_now_text}</h3>
    <a
    href={`https://www.google.com/maps/place/${place.latitude},${place.longitude}`}
    target="_blank"
    rel="noopener noreferrer"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'  }}>
    <img style={{ width: '20px', height: '20px' }} src="direction.png" alt="Directions" />
    </div>
    </a>

  </div>
</InfoWindow>



))}
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)



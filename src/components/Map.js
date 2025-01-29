import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'

const containerStyle = {
  width: '60vw',
  height: '84.65vh',
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
      lat: 17.4,
      lng: 78.4,
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
  <Marker
    key={i}
    position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
    label={place.name}
    icon={{
      url: place.photo.images.large.url,
      scaledSize: new window.google.maps.Size(45, 45),
    }}
  >
    
  </Marker>
))}
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)



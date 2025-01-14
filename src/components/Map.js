import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '60vw',
  height: '84.65vh',
}

function MyComponent(props ) {
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
      console.log(center.lat+"------->"+center.lng)
     
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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}

      onChange = {
        (e) => {
          console.log(e)

          props.setCoordinates({
            lat: e.center.lat(),
            lng: e.center.lng()})
        }
      }

     
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)



import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight:'40rem',
  padding:"2rem"
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () =>  {
  
  const [map, setMap] = React.useState(null);
  
  
  const { isLoaded } = useJsApiLoader({
    id: process.env.GOOGLE_API_ID,
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });



  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={onLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;

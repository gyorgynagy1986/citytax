import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () =>  {
  
  const [map, setMap] = React.useState(null);
  
  const mapApiKey = process.env.GOOGLE_API_KEY;
  
  const { isLoaded } = useJsApiLoader({
    id: "d7f9212f7c13ae23",
    googleMapsApiKey: "AIzaSyANMCWmc3cLTBMXDrN_wdXsTGG4p5-Dzkg",
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
      zoom={12}
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

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

const Map =  () => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 46.209660, lng: 20.471570 }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    id: "d7f9212f7c13ae23",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={18}
        center={mapCenter}
        mapContainerStyle={{ width: "100%", height: "800px" }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
          icon="https://citytax.vercel.app/marker.svg"
        />
      </GoogleMap>
    </div>
  );
};

export default Map;


import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const [apiKey, setApiKey] = useState(null);

  console.log(apiKey)

  useEffect(() => {
    // Fetch the API key from your environment variables or any other source.
    const apiKeyFromEnv = process.env.GOOGLE_API_KEY;

    if (apiKeyFromEnv) {
      setApiKey(apiKeyFromEnv);
    }
  }, []);

  if (apiKey === null) {
    // You can display a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 10.99835602, lng: 77.01502627 }}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
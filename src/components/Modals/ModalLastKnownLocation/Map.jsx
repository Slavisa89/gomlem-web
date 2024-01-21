import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "@/assets/imgs/markerMap.svg";
import { useState } from "react";
import { useGeolocated } from "react-geolocated";

export default function MapTopCustomer() {
//TODO This Component has Bug 
// In Load Location 
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const markerIcon = L.icon({
    iconUrl: marker,
    iconSize: [24, 24],
  });

  return (
    <div className="w-full h-[240px]">
      {/* {!isGeolocationAvailable && ( */}
        <MapContainer
          style={{ width: "100%", height: "240px", zIndex: "10" }}
          zoom={14}
          scrollWheelZoom={false}
          fadeAnimation={true}
          markerZoomAnimation={true}
          // center={[coords.latitude, coords.longitude]}
          center={[45.1557,-73.123]}
        >
          <TileLayer
            url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${
              import.meta.env.VITE_REACT_APP_ACCESS_TOKEN_MAP
            }`}
          />
          <Marker
            // position={[coords.latitude, coords.longitude]}
            position={[45.1557,-73.123]}
            icon={markerIcon}
          />
        </MapContainer>
      {/* )} */}
    </div>
  );
}

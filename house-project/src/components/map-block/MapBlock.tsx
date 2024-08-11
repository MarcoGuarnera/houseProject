"use client";

// IMPORTANT: the order matters
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Container } from "@mantine/core";
import styles from "./styles.module.css";

interface MapBlockProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function ({ coordinates }: MapBlockProps) {
  if (!coordinates) return;

  return (
    <Container size="xl">
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={11}
        scrollWheelZoom={true}
        className={styles.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.lat, coordinates.lng]}></Marker>
      </MapContainer>
    </Container>
  );
}

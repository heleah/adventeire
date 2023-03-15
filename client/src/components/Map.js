import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVsZWFoIiwiYSI6ImNsZjZ2ZHF0dzB6NHgzem80bmNham9zcGgifQ.d1RMKOhEYP1JJ19r9AN7eQ";

export default function Map({ sights }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-8.2439);
  const [lat, setLat] = useState(53.4129);
  const [zoom, setZoom] = useState(5.5);
  const nav = new mapboxgl.NavigationControl();

  useEffect(() => {
    map.current = getMap();
    map.current.addControl(nav);
    addMarker(sights);
    return () => map.current.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [lng, lat, zoom]);

  function getMap() {
    return new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }

  function addMarker(arr) {
    arr.forEach((el) => {
      console.log(el); // remove later
      const { longitude, latitude } = el.coordinates;
      return new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map.current);
    });
  }

  return (
    <div>
      <MapContainer ref={mapContainer} className="map-container" />
    </div>
  );
}

const MapContainer = styled.div`
  height: 500px;
`;

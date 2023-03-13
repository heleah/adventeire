import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVsZWFoIiwiYSI6ImNsZjZ2ZHF0dzB6NHgzem80bmNham9zcGgifQ.d1RMKOhEYP1JJ19r9AN7eQ";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-8.24389);
  const [lat, setLat] = useState(53.41291);
  const [zoom, setZoom] = useState(5.5);
  const nav = new mapboxgl.NavigationControl();

  useEffect(() => {
    map.current = getMap();
    map.current.addControl(nav);
    return () => map.remove();
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

  return (
    <div>
      <MapContainer ref={mapContainer} className="map-container" />
    </div>
  );
}

const MapContainer = styled.div`
  height: 500px;
`;

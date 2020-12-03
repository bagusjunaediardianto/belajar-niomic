import React, { useEffect } from "react";

const Location = () => {
  let L = window.L;
  let map = window.map;
  
  const initializeMap = ()=>{
    map = L.map("map",{
      center : [-6.175239, 106.827204],
      zoom : 14
    })

    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"
    ).addTo(map)
  }

  useEffect(()=>{
    initializeMap()
  })
  return (
    <div id="map" />
  );
};

export default Location;

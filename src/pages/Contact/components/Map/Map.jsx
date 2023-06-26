import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Annotation, Line } from 'react-simple-maps';
import { feature } from 'topojson-client';
import axios from 'axios';

const Map = () => {
  const [geoData, setGeoData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const fetchGeoData = async () => {
    const url = 'https://unpkg.com/us-atlas@3/states-10m.json';
    const res = await axios.get(url);
    const us = await res.data;
    const states = feature(us, us.objects.states);
    setGeoData(states);
  };

  useEffect(() => {
    fetchGeoData();
  }, []);

  if (!geoData) return null; // or a loading spinner

  const containerStyles = windowWidth <= 1440 ? {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 0 0'
  } : {
    width: 'auto',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 0 0'
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <div style={containerStyles}>
      <div style={mapStyles}>
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 2150 }}
          style={{ width: '100%', height: '100%'}}
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={geo.id === '08' ? '#020039' : 'transparent'} // '08' is the id for Colorado
                  stroke="#FFFFFF"
                  style={{
                    default: {
                      outline: 'none',
                    },
                    hover: {
                      outline: 'none',
                    },
                    pressed: {
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
          <Annotation subject={[-105.5, 39.1]} dx={50} dy={50} connectorProps={{
            stroke: "#A248FF",
            strokeWidth: 3,
            strokeLinecap: "round"
          }}>
            <Line stroke="white" fill="white" x1={0} y1={0} x2={50} y2={50} />
            <text x={21} y={26} fontSize="20" textAnchor="middle" fill="black">
              Colorado
            </text>
            <text x={20} y={25} fontSize="20" textAnchor="middle" fill="#fff">
              Colorado
            </text>
          </Annotation>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;

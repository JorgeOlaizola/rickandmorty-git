import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../utils/constants";
import Location from "./location";
import '../cards/cards.css'

function Locations() {
  const [all, setAll] = useState([]);
  useEffect(() => {
    axios.get(API_ENDPOINTS.locations).then((e) => {
      setAll(e.data.results);
    });
  }, []);

  return (
    <div>
      {all.length > 0 && all?.map((location) => (
        <Location className='cards-container' location={location} />
      ))}
    </div>
  );
}

export default Locations;

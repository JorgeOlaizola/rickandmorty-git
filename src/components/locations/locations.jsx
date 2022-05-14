import axios from "axios";
import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../utils/constants";
import Location from "./location";

function Locations() {
  const [all, setAll] = useState();
  useEffect(async () => {
    const aux1 = [];
    let catalog = [];
    axios.get(`https://rickandmortyapi.com/api/location`).then((e) => {
      setAll(e.data.results);
    });
  }, []);

  return (
    <div>
      {all?.map((location) => (
        <Location location={location} />
      ))}
    </div>
  );
}

export default locations;

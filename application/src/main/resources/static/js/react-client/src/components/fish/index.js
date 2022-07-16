import React, { useEffect, useState } from "react";

import Axios from "axios";
import style from "./style.module.scss";

function Fish() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    Axios.get("https://www.fishwatch.gov/api/species").then((response) => {
      console.log("Fish:", response.data);
      setSpecies(response.data);

      // const [speciesState, setSpeciesState] = useState({
      //   SpeciesName: "",
      //   ScientificName: "",
      //   ImageGallery: {
      //     src: "",
      //     alt: "",
      //   },
      // });

      // const handleChange = (e) => {
      //   const value = e.target.value;
      //   setSpeciesState({
      //     ...speciesState,
      //     [e.target.SpeciesName]: value,
      //   });
      // };
    });
  });
}

export default Fish;

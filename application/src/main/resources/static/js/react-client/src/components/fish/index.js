import React, { useState } from "react";

import axios from "axios";
import style from "./style.module.scss";

const Fish = () => {
  console.log(fish);

  const [fishState, setFishState] = useState({
    "Species Name": "",
    "Scientific Name": "",
    "Image Gallery": {
      src: "",
      alt: "",
    },
  });

  axios
    .post("https://www.fishwatch.gov/api/species", userData)
    .then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
};

export default Fish;

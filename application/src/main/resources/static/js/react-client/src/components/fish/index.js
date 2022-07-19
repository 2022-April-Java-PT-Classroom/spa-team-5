import React, { useState } from "react";

import axios from "axios";
import style from "./style.module.scss";

const Fish = () => {
  console.log(Fish);

  const [fishState, setFish] = useState({
    name: "",
    isSelected: false,
  });

  const handleChange = (e) => {
    const value = e / EventTarget.value;
    setFish({
      ...fishState,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: fishState.name,
      isSelected: false,
    };

    axios.post("", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
  };
};


import React, { useEffect, useState } from "react";

import Axios from "axios";
import Fish from "../../components/fish";
import style from "../home-screen/style.module.scss";

const HomeScreen = () => {
  const [loadingSpecies, setLoadingSpecies] = useState(true),
    [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("https://www.fishwatch.gov/api/species");
      setSpecies(result.data);
    };

    if (species) {
      setLoadingSpecies(false);
    }
  });

  return (
    <div>
      <div className={style.Fish}>
        <section className={style.fishInfo}>
          {loadingSpecies ? <h3>Loading...</h3> : <Fish fish={fish} />}
        </section>
      </div>
    </div>
  );
};
export default HomeScreen;

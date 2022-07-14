import React, { useEffect, useState } from "react";
import Axios from "axios";
import style from "./style.module.scss";
import fish from '../../components/fish';

const HomeScreen = () => {
 const[loadingFish,setLoadingFish]=useState(true);
 [fish,setFish]=useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("https://www.fishwatch.gov/api/species");
      setFish(result.data);

    if(fish){
        setLoadingFish(false)
  }


return(
    <div>
        <div className={style.form_container}>
            <section className={style.fishInformation}>
                {loadingFish ? <h3> Loading...</h3>: <Fish fish={fish}/>}
            </section>
        </div>
    </div>
);
}


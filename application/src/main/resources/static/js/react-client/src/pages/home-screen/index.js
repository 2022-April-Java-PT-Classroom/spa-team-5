import React, { useEffect, useState } from "react";

import Axios from 'axios';
import GameField from "../../components/gameField";
import style from './homeStyle.module.scss';
import randomIntBetween from "../../util/randomIntBetween";

const HomeScreen = () => {

   const [loadingTileImages, setLoadingTileImages] = useState(true);
   const [tileImages, setTileImages] = useState(null);

   useEffect(() => {
    const fetchData = async () => {
        const result = await Axios('http://localhost:8080/game-tiles/4');
        setTileImages(result.data);
    }
    
    if (tileImages) {
        setLoadingTileImages(false);
    }

    
        const timer = setTimeout(() => {
            !tileImages && fetchData();
        }, 1000);
        return () => clearTimeout(timer);

    }, [tileImages]);

   
    let winningX = randomIntBetween(0,4);
    let winningY = randomIntBetween(0,3);

return <div>
        {loadingTileImages ? <h3>Loading ...</h3> : <GameField rows = {3} cols = {4} image = {tileImages.image} winningX = {winningX} winningY = {winningY}/>}
       </div>
}

export default HomeScreen;
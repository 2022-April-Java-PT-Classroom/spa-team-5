import React, { useEffect, useState } from "react";

import Axios from 'axios';
import style from './homeStyle.module.scss';
import Game from "../../components/game/game";

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

return <div className={style.game}>
        {loadingTileImages ? <h3>Loading ...</h3> : <Game image = {tileImages.image}/>}
       </div>
}

export default HomeScreen;
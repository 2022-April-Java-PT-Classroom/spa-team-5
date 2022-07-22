import React, { useEffect, useState } from "react";
import Axios  from "axios";
import { useParams } from "react-router-dom";

import GameField from "../../components/gameField";
import randomIntBetween from "../../util/randomIntBetween";

import style from './gameStyle.module.scss';


const Game = () => {

   const [loadingTileImage, setLoadingTileImage] = useState(true);
   const [tileImage, setTileImage] = useState(null);

   useEffect(() => {
    const fetchData = async () => {
        const result = await Axios('http://localhost:8080/game-tiles/random');
        setTileImage(result.data);
    }
    
    if (tileImage) {
        setLoadingTileImage(false);
    }

        const timer = setTimeout(() => {
            !tileImage && fetchData();
        }, 1000);
        return () => clearTimeout(timer);

    }, [tileImage]);

    let {score} = useParams();
     if (!score){
        score = 0;
     }

     score = parseInt(score);

     const cols = Math.floor(((score*2+1000)/3000 + 2));
     const rows = Math.floor(((score + 1000)/3000 + 2)); 

     const winningX = randomIntBetween(0,cols);
     const winningY = randomIntBetween(0,rows);

     console.log(loadingTileImage);
     console.log(tileImage);

 return <div className={style.game}>
            <h2 className={style.instructions}>Which one is not the same??</h2>
            {loadingTileImage ? <h3>Loading . . .</h3> :
                <GameField rows = {rows} cols = {cols} image = {tileImage.id} altImage = {tileImage.randomAltImage} winningX = {winningX} winningY = {winningY} score = {score}/>
            }
        </div>
        
   
 }

 export default Game;
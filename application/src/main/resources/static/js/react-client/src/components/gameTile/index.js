import React from "react";
import style from './gameTileStyle.module.scss';
import image from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish.png';
import altIMage from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish0.png';

const GameTile = (index, imageURL, isWinningTile, score) => {
    let tile;
    const newScore = parseInt(score)+1000;
    if (isWinningTile){
        tile = <img key={index} src={altIMage} onClick={()=>{
            window.location = '/game/' + (newScore);
        }}/>
    } else {
        tile = <img key={index} src={image} onClick={()=>{
            window.location = '/scores';
        }}/>
    }

    return tile;
}

export default GameTile;
import React from "react";
import style from './gameTileStyle.module.scss';
import image from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish.png';
import altIMage from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish0.png';

const GameTile = (index, imageURL, isWinningTile) => {
    console.log(isWinningTile);
    if (isWinningTile){
        return <img key={index} src={altIMage}/>
    } else {
        return <img key={index} src={image}/>
    }
}

export default GameTile;
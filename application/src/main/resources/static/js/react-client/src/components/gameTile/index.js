import React from "react";
import style from './gameTileStyle.module.scss';
import image from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish.png';
import altIMage from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish0.png';
import RandomIntBetween from "../../util/randomIntBetween";

const GameTile = (index, imageURL, isWinningTile) => {
    let tile;
    if (isWinningTile){
        tile = <img key={index} src={altIMage} onClick={()=>{
            window.location = '/';
        }}/>
    } else {
        tile = <img key={index} src={image} onClick={()=>{
            window.location = '/scores';
        }}/>
    }

    return tile;
}

export default GameTile;
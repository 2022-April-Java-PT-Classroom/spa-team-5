import React from "react";
import style from './gameTileStyle.module.scss';
import image from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish.png';
import altImage from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish0.png';

const GameTile = (index, imageURL, isWinningTile, score) => {
    let tile;
    const newScore = parseInt(score);
    if (isWinningTile){
        tile = <img key={index} src={altImage} onClick={()=>{
            window.location = '/game/' + (newScore + 1000);
        }}/>
    } else {
        tile = <img key={index} src={image} onClick={()=>{
            window.location = '/scores/' + newScore;
        }}/>
    }

    return tile;
}

export default GameTile;
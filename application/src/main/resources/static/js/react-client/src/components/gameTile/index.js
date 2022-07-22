import React from "react";
import style from './gameTileStyle.module.scss';
import fishImage from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish.png';
import fishImage0 from '../../assets/GameTiles/OrangeStripedFish/OrangeStripedFish0.png';
import birdsImage from '../../assets/GameTiles/BirdsTree/BirdsTree.png';
import birdsImage0 from '../../assets/GameTiles/BirdsTree/BirdsTree0.png';
import birdsImage1 from '../../assets/GameTiles/BirdsTree/BirdsTree1.png';
import birdsImage2 from '../../assets/GameTiles/BirdsTree/BirdsTree2.png';
import islandImage from '../../assets/GameTiles/TwoTreeIsland/TwoTreeIsland.png';
import islandImage0 from '../../assets/GameTiles/TwoTreeIsland/TwoTreeIsland0.png';
import islandImage1 from '../../assets/GameTiles/TwoTreeIsland/TwoTreeIsland1.png';

const GameTile = (index, imageURL, isWinningTile, score) => {
    let tile;
    const newScore = parseInt(score);
    const images = [[fishImage, fishImage0], [birdsImage, birdsImage0, birdsImage1, birdsImage2], [islandImage, islandImage0, islandImage1]];

    if (isWinningTile){
        tile = <img key={index} src={images[0][1]} onClick={()=>{
            window.location = '/game/' + (newScore + 1000);
        }}/>
    } else {
        tile = <img key={index} src={images[0][0]} onClick={()=>{
            window.location = '/scores/' + newScore;
        }}/>
    }

    return tile;
}

export default GameTile;
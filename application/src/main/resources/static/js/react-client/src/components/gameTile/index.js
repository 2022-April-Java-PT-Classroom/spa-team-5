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
import caveImage from '../../assets/GameTiles/Cave/Cave.png';
import caveImage0 from '../../assets/GameTiles/Cave/Cave0.png';
import caveImage1 from '../../assets/GameTiles/Cave/Cave1.png';
import caveImage2 from '../../assets/GameTiles/Cave/Cave2.png';
import octopusImage from '../../assets/GameTiles/Octopus/Octopus.png';
import octopusImage0 from '../../assets/GameTiles/Octopus/Octopus0.png';
import octopusImage1 from '../../assets/GameTiles/Octopus/Octopus1.png';
import octopusImage2 from '../../assets/GameTiles/Octopus/Octopus2.png';


const GameTile = (index, image, altImage, isWinningTile, score) => {
    let tile;
    const newScore = parseInt(score);
    const images = [[fishImage, fishImage0], [birdsImage, birdsImage0, birdsImage1, birdsImage2], [islandImage, islandImage0, islandImage1], [caveImage, caveImage0, caveImage1, caveImage2], [octopusImage, octopusImage0, octopusImage1, octopusImage2]];

    const tileType = parseInt(image) - 1;
    const altType = parseInt(altImage) + 1;

    if (isWinningTile){
        tile = <img key={index} src={images[tileType][altType]} onClick={()=>{
            window.location = '/game/' + (newScore + 1000);
        }}/>
    } else {
        tile = <img key={index} src={images[tileType][0]} onClick={()=>{
            window.location = '/scores/' + newScore;
        }}/>
    }

    return tile;
}

export default GameTile;
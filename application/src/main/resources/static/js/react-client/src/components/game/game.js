import React from "react";
import { useParams } from "react-router-dom";

import GameField from "../../components/gameField";
import style from './gameStyle.module.scss';
import randomIntBetween from "../../util/randomIntBetween";

const Game = (props) => {
    let {score} = useParams();
     if (!score){
        score = 0;
     }
     const winningX = randomIntBetween(0,4);
     const winningY = randomIntBetween(0,3);

 return <div className={style.game}>
            <h2 className={style.instructions}>Which one is not the same??</h2>
            <GameField rows = {3} cols = {4} image = {props.image} winningX = {winningX} winningY = {winningY} score = {score}/>
        </div>
 }

 export default Game;
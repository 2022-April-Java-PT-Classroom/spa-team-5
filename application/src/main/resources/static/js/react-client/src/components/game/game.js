import GameField from "../../components/gameField";
import React from "react";
import randomIntBetween from "../../util/randomIntBetween";
import style from './gameStyle.module.scss';
import { useParams } from "react-router-dom";

const Game = (props) => {
    let {score} = useParams();
     if (!score){
        score = 0;
     }

     score = parseInt(score);

     const cols = Math.floor(((score*2+1000)/3000 + 2));
     const rows = Math.floor(((score + 1000)/3000 + 2)); 

     const winningX = randomIntBetween(0,cols);
     const winningY = randomIntBetween(0,rows);

 return <div className={style.game}>
            <h2 className={style.instructions}>Which one is not the same??</h2>
            <GameField rows = {rows} cols = {cols} image = {props.image} winningX = {winningX} winningY = {winningY} score = {score}/>
        </div>
        
   
 }

 export default Game;
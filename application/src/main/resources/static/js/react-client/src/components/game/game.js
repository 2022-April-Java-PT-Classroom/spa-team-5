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
     const winningX = randomIntBetween(0,4);
     const winningY = randomIntBetween(0,3);


 return <div className={style.game}>
            <h2 className={style.instructions}>Which one is not the same??</h2>
            <GameField rows = {3} cols = {4} image = {props.image} winningX = {winningX} winningY = {winningY} score = {score}/>
        </div>
        
   
 }

 export default Game;
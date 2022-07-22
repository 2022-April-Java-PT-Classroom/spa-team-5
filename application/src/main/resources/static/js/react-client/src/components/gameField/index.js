import React from "react";
import GameRow from "../gameRow";
import style from './gameFieldStyle.module.scss';

const GameField = (props) => {
    const gameField = [];
        for (let i = 0; i < props.rows; i++){
            if ( i === props.winningY){
                gameField[i] = GameRow(props.cols, i, props.image, true, props.winningX, props.score);
            } else{
                gameField[i] = GameRow(props.cols, i, props.image, false, 0, props.score);
            }
            
        }

    return gameField;
}

export default GameField;
import React from "react";
import GameRow from "../gameRow";
import style from './gameFieldStyle.module.scss';

const GameField = (props) => {
    const gameField = [];
        for (let i = 0; i < props.rows; i++){
            if ( i === props.winningY){
                gameField[i] = GameRow(props.cols, i, props.image, true, props.winningX);
            } else{
                gameField[i] = GameRow(props.cols, i, props.image, false);
            }
            
        }

    return gameField;
}

export default GameField;
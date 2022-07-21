import React from "react";
import GameRow from "../gameRow";
import style from './gameFieldStyle.module.scss';

const GameField = (props) => {
    const gameField = [];
        for (let i = 0; i < props.rows; i++){
            gameField[i] = GameRow(props.cols, i);
        }

    return gameField;
}

export default GameField;
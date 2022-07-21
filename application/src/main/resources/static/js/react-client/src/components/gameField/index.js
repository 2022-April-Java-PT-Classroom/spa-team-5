import React from "react";
import GameRow from "../gameRow";
import style from './gameFieldStyle.module.scss';

const GameField = () => {
    const gameField = [];
        for (let i = 0; i < 4; i++){
            gameField[i] = GameRow(4, i);
        }

    return gameField;
}

export default GameField;
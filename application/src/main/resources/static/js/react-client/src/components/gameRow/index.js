import React from "react";
import GameTile from "../gameTile";
import style from './gameRowStyle.module.scss';

const GameRow = (col, index) => {
    const newRow = [];
        for (let i = 0; i < col; i++){
            newRow[i] = GameTile(i);
        }

    return (
        <div key={index}>
            {newRow}
        </div>
    );
}

export default GameRow;
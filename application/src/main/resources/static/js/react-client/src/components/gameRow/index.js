import React from "react";
import GameTile from "../gameTile";
import style from './gameRowStyle.module.scss';

const GameRow = (col, index, image, isWinningRow, winningCol) => {
    const newRow = [];
        for (let i = 0; i < col; i++){
            if (isWinningRow && i === winningCol){
                newRow[i] = GameTile(i, image, true);
            } else {
                newRow[i] = GameTile(i, image, false);
            }
        }

    return (
        <div key={index}>
            {newRow}
        </div>
    );
}

export default GameRow;
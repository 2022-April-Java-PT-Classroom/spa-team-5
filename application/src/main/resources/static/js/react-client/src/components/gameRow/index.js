import React from "react";
import GameTile from "../gameTile";
import style from './gameRowStyle.module.scss';

const GameRow = (col, index, image, altImage, isWinningRow, winningCol, score) => {
    const newRow = [];
        for (let i = 0; i < col; i++){
            if (isWinningRow && i === winningCol){
                newRow[i] = GameTile(i, image, altImage, true, score);
            } else {
                newRow[i] = GameTile(i, image, altImage, false, score);
            }
        }

    return (
        <div key={index} className={style.row}>
            {newRow}
        </div>
    );
}

export default GameRow;
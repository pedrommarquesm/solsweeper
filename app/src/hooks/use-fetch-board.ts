"use client";
import React, { useState } from "react";

export interface BoardArgs {
  numberOfRows: number;
  numberOfCols: number;
}

export type BlockType = "empty" | "hidden" | "bomb" | "flagged";

export type Board = BlockType[][];

function useFetchBoard(
  numberOfRows: BoardArgs["numberOfRows"],
  numberOfCols: BoardArgs["numberOfCols"]
): Board {
  const [board, setBoard] = useState(() => {
    const initialBoard: Board = [];
    for (let i = 0; i < numberOfRows; i++) {
      initialBoard.push([]);
      for (let j = 0; j < numberOfCols; j++) {
        if (j === 2 && i === 2) {
          initialBoard[i].push("bomb");
        } else if (j === 5 && i === 5) {
          initialBoard[i].push("flagged");
        } else if (j === 1 && i === 1) {
          initialBoard[i].push("empty");
        } else if (j === 2 && i === 1) {
          initialBoard[i].push("empty");
        } else {
          initialBoard[i].push("hidden");
        }
      }
    }
    return initialBoard;
  });

  return board;
}

export default useFetchBoard;

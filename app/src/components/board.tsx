"use client";
import React from "react";

import useFetchBoard, { BoardArgs } from "@/hooks/use-fetch-board";
import Column from "./ui/column";
import Block from "./block";

interface BoardProps extends BoardArgs {}

function Board({ numberOfRows, numberOfCols }: BoardProps) {
  const board = useFetchBoard(numberOfRows, numberOfCols);

  return (
    <div className="flex bg-[#c0c0c0]">
      <button />
      {board.map((row, i) => (
        <Column key={i}>
          {row.map((col, j) => (
            <Block
              key={j}
              blockType={col}
              onClick={() => {
                console.log("clicked:", i, j);
              }}
            />
          ))}
        </Column>
      ))}
    </div>
  );
}

export default Board;

import { BlockType } from "@/hooks/use-fetch-board";
import React from "react";
import EmptyBlock from "./ui/empty-block";
import FlaggedBlock from "./ui/flagged-block";
import BombBlock from "./ui/bomb-block";
import HiddenBlock from "./ui/hidden-block";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface BlockProps extends ButtonProps {
  blockType: BlockType;
}

const BlocksByType: Record<BlockType, (props: ButtonProps) => JSX.Element> = {
  bomb: (props) => <BombBlock {...props}></BombBlock>,
  empty: (props) => <EmptyBlock {...props}></EmptyBlock>,
  hidden: (props) => <HiddenBlock {...props}></HiddenBlock>,
  flagged: (props) => <FlaggedBlock {...props}></FlaggedBlock>,
};

function Block({ blockType, ...buttonProps }: BlockProps) {
  return BlocksByType[blockType](buttonProps);
}

export default Block;

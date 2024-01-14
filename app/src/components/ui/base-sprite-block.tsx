import { classed } from "@/config/classed";
import BaseBlock from "./base-block";

const BaseSpriteBlock = classed(
  BaseBlock,
  "bg-sprite bg-no-repeat",
  "bg-[length:80px_100px]"
);

export default BaseSpriteBlock;

// original dimension: 64x80

// 64 => 80
// 80 => 100

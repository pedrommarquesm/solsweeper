import { classed } from "@/config/classed";
import BaseBlock from "./base-block";

const EmptyBlock = classed(
  BaseBlock,
  "border-1 border-[gray]",
  "border-r-0 border-b-0"
);

export default EmptyBlock;

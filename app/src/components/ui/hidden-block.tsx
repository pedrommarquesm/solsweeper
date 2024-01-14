import { classed } from "@/config/classed";
import BaseBlock from "./base-block";

const HiddenBlock = classed(
  BaseBlock,
  "bg-[#c0c0c0]",
  "active:border-[gray] active:border-r-0 active:border-b-0"
);

export default HiddenBlock;

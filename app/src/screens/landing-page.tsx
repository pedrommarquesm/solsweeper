import Board from "@/components/board";
import React from "react";

function LandingPage() {
  return (
    <div>
      <h1>Solana Sweeper</h1>
      <Board numberOfRows={10} numberOfCols={10} />
    </div>
  );
}

export default LandingPage;

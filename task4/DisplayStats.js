import StatsTable from "./StatsTable.js";

class DisplayStats {

  display(roundsSwitched, roundsStayed, winsSwitched, winsStayed, boxes) {

    const pEstimateSwitched =
      roundsSwitched > 0 ? (winsSwitched / roundsSwitched).toFixed(3) : "?";

    const pEstimateStayed =
      roundsStayed > 0 ? (winsStayed / roundsStayed).toFixed(3) : "?";

    const pExactSwitched = ((boxes - 1) / boxes).toFixed(3);
    const pExactStayed = (1 / boxes).toFixed(3);

    const statsTable = new StatsTable();
    
    statsTable.fill(
      roundsSwitched,
      roundsStayed,
      winsSwitched,
      winsStayed,
      pEstimateSwitched,
      pEstimateStayed,
      pExactSwitched,
      pExactStayed
    );

    console.log("\n\t\t   GAME STATS\n");
    console.log(statsTable.toString());
  }
}

export default DisplayStats;

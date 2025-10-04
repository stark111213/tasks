import Table from "cli-table3";

class StatsTable {

  constructor() {
    
    this.table = new Table({
      head: ["Game results", "Rick switched", "Rick stayed"],
      colAligns: ["left", "right", "right"],
      style: { head: [], border: [] }
    });
  }

  fill(
    roundsSwitched,
    roundsStayed,
    winsSwitched,
    winsStayed,
    pEstimateSwitched,
    pEstimateStayed,
    pExactSwitched,
    pExactStayed
  ) {
    this.table.push(
      ["Rounds", roundsSwitched, roundsStayed],
      ["Wins", winsSwitched, winsStayed],
      ["P (estimate)", pEstimateSwitched, pEstimateStayed],
      ["P (exact)", pExactSwitched, pExactStayed]
    );
  }

  toString() {
    return this.table.toString();
  }
}

export default StatsTable;

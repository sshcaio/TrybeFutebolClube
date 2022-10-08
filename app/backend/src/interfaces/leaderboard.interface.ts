interface ILeaderBoard {
  name: string;
  teamName?: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
  [props: string]: unknown;
}

export default ILeaderBoard;

import sequelize = require('sequelize');
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import ILeaderBoard from '../../interfaces/leaderboard.interface';
import totalPoints from '../../helpers/total.points';
import convertEfficiency from '../../helpers/efficiency';

class LeaderboardHomeService {
  static async getLeaderBoard(): Promise<ILeaderBoard[]> {
    const leaderboard = await Match.findAll({ where: { inProgress: false },
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('home_team')), 'totalGames'],
        [sequelize.fn('SUM', sequelize.col('home_team_goals')), 'goalsFavor'],
        [sequelize.fn('SUM', sequelize.col('away_team_goals')), 'goalsOwn'],
        [sequelize.literal('SUM(home_team_goals) - SUM(away_team_goals)'), 'goalsBalance'],
        [sequelize.literal('SUM(home_team_goals > away_team_goals)'), 'totalVictories'],
        [sequelize.literal('SUM(home_team_goals = away_team_goals)'), 'totalDraws'],
        [sequelize.literal('SUM(home_team_goals < away_team_goals)'), 'totalLosses'],
        [sequelize.literal(`${totalPoints}`), 'totalPoints'],
        [sequelize.literal(`${convertEfficiency}`), 'efficiency']],
      include: [{ model: Team, as: 'teamHome', attributes: ['teamName'] }],
      group: ['home_team'],
      order: [
        [sequelize.literal('totalPoints'), 'DESC'], [sequelize.literal('totalVictories'), 'DESC'],
        [sequelize.literal('goalsBalance'), 'DESC'], [sequelize.literal('goalsFavor'), 'DESC'],
        [sequelize.literal('goalsOwn'), 'ASC']] });

    return leaderboard as unknown as ILeaderBoard[];
  }

  static async orderedLeaderboard(): Promise<ILeaderBoard[]> {
    const leaderboard = await LeaderboardHomeService.getLeaderBoard();

    const orderedLeaderboard = leaderboard.map((item) => ({
      name: (item.teamHome as unknown as ILeaderBoard).teamName,
      totalPoints: +(item.dataValues as unknown as ILeaderBoard).totalPoints,
      totalGames: +(item.dataValues as unknown as ILeaderBoard).totalGames,
      totalVictories: +(item.dataValues as unknown as ILeaderBoard).totalVictories,
      totalDraws: +(item.dataValues as unknown as ILeaderBoard).totalDraws,
      totalLosses: +(item.dataValues as unknown as ILeaderBoard).totalLosses,
      goalsFavor: +(item.dataValues as unknown as ILeaderBoard).goalsFavor,
      goalsOwn: +(item.dataValues as unknown as ILeaderBoard).goalsOwn,
      goalsBalance: +(item.dataValues as unknown as ILeaderBoard).goalsBalance,
      efficiency: (item.dataValues as unknown as ILeaderBoard).efficiency,
    }));

    return orderedLeaderboard as unknown as ILeaderBoard[];
  }
}

export default LeaderboardHomeService;

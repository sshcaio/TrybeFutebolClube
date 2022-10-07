import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import HttpException from '../../shared/http.exception';

class MatchesServices {
  static async getMatches(): Promise<Match[]> {
    const matches: Match[] = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!matches) {
      throw new HttpException(500, 'Internal server error');
    }

    return matches;
  }

  static async getFilteredMatches(progress: boolean): Promise<Match[]> {
    const matches: Match[] = await Match.findAll({
      where: { inProgress: progress },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!matches) {
      throw new HttpException(500, 'Internal server error');
    }

    return matches;
  }
}

export default MatchesServices;

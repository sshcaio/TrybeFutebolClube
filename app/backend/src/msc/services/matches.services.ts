import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import HttpException from '../../shared/http.exception';
import INewMatch from '../../interfaces/newmatch.interface';

class MatchesServices {
  static internalServerError = 'Internal server error';

  static async getMatches(): Promise<Match[]> {
    const matches: Match[] = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!matches) {
      throw new HttpException(500, this.internalServerError);
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
      throw new HttpException(500, this.internalServerError);
    }

    return matches;
  }

  static async postMatch(match: INewMatch): Promise<Match> {
    const newMatch = await Match.create({ ...match });
    if (!newMatch) {
      throw new HttpException(500, this.internalServerError);
    }

    return newMatch as Match;
  }

  static async patchMatch(id: string, home: number, away: number): Promise<number> {
    const [NewResult] = await Match.update(
      { home, away },
      { where: { id } },
    );

    return NewResult;
  }

  static async endMatch(id: string): Promise<number> {
    const [NewResult] = await Match.update(
      { inProgress: false },
      { where: { id } },
    );

    return NewResult;
  }
}

export default MatchesServices;

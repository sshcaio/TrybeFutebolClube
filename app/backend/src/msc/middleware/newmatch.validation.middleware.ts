import { Request, Response, NextFunction } from 'express';
import Team from '../../database/models/TeamModel';
import HttpException from '../../shared/http.exception';

class NewMatchValidation {
  static async validate(request: Request, _response: Response, next: NextFunction) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = request.body;
    if (!homeTeam || !awayTeam || !homeTeamGoals || !awayTeamGoals) {
      throw new HttpException(400, 'All fields must be filled');
    }
    if (homeTeam === awayTeam) {
      throw new HttpException(401, 'It is not possible to create a match with two equal teams');
    }

    const home = await Team.findByPk(homeTeam);
    const away = await Team.findByPk(awayTeam);
    if (!home || !away) {
      throw new HttpException(404, 'There is no team with such id!');
    }

    next();
  }
}

export default NewMatchValidation;

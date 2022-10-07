import { Request, Response, NextFunction } from 'express';
import HttpException from '../../shared/http.exception';
import TeamsService from '../services/teams.services';

class NewMatchValidation {
  static async validate(request: Request, _response: Response, next: NextFunction) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = request.body;
    if (!homeTeam || !awayTeam || !homeTeamGoals || !awayTeamGoals || !inProgress) {
      throw new HttpException(400, 'All fields must be filled');
    }
    if (homeTeam === awayTeam) {
      throw new HttpException(401, 'It is not possible to create a match with two equal teams');
    }

    if (inProgress === false) {
      throw new HttpException(401, 'New matches must be running');
    }

    const home = await TeamsService.getTeamById(homeTeam);
    const away = await TeamsService.getTeamById(awayTeam);
    if (!home || !away) {
      throw new HttpException(404, 'There is no team with such id!');
    }

    next();
  }
}

export default NewMatchValidation;

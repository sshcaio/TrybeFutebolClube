import { Request, Response } from 'express';
import MatchesServices from '../services/matches.services';

class MatchesController {
  static async getMatches(request: Request, response: Response): Promise<Response> {
    if (!request.query.inProgress) {
      const result = await MatchesServices.getMatches();
      return response.status(200).json(result);
    }

    const { inProgress } = request.query;

    let progress = true;
    switch (inProgress) {
      case 'true':
        progress = true;
        break;

      case 'false':
        progress = false;
        break;

      default:
        break;
    }

    const matches = await MatchesServices.getFilteredMatches(progress);
    return response.status(200).json(matches);
  }

  static async postMatch(request: Request, response: Response): Promise<Response> {
    const result = await MatchesServices.postMatch(request.body);
    return response.status(201).json(result);
  }

  static async patchMatch(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { homeTeamGoals, awayTeamGoals } = request.body;
    let resultMessage = '';

    const result = await MatchesServices.patchMatch(id, homeTeamGoals, awayTeamGoals);

    switch (result) {
      case 0:
        resultMessage = 'That\'s already the match result';
        break;

      case 1:
        resultMessage = 'Successfully changed';
        break;

      default:
        break;
    }

    return response.status(200).json({ message: resultMessage });
  }

  static async endMatch(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    let resultMessage = '';

    const result = await MatchesServices.endMatch(id);

    switch (result) {
      case 0:
        resultMessage = 'Match is already over';
        break;

      case 1:
        resultMessage = 'Finished';
        break;

      default:
        break;
    }

    return response.status(200).json({ message: resultMessage });
  }
}

export default MatchesController;

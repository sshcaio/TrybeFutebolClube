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
}

export default MatchesController;

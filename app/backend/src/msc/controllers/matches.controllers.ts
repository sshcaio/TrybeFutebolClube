import { Request, Response } from 'express';
import MatchesService from '../services/matches.services';

class MatchesController {
  static async getMatches(_request: Request, response: Response): Promise<Response> {
    const result = await MatchesService.getMatches();
    return response.status(200).json(result);
  }
}

export default MatchesController;

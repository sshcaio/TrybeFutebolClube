import { Request, Response } from 'express';
import LeaderboardHomeService from '../services/leaderboards.services';

class LeaderboardHomeController {
  static async getTable(_request: Request, response: Response): Promise<Response> {
    const result = await LeaderboardHomeService.orderedLeaderboard();

    return response.status(200).json(result);
  }
}

export default LeaderboardHomeController;

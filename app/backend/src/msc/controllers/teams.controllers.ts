import { Request, Response } from 'express';
import TeamsService from '../services/teams.services';

class TeamsController {
  static async getTeams(_request: Request, response: Response): Promise<Response> {
    const result = await TeamsService.getTeams();
    return response.status(200).json(result);
  }

  static async getTeamById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const result = await TeamsService.getTeamById(+id);
    return response.status(200).json(result);
  }
}

export default TeamsController;

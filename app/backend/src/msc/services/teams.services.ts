import ITeam from '../../interfaces/team.interface';
import Team from '../../database/models/TeamModel';
import HttpException from '../../shared/http.exception';

class TeamsService {
  static async getTeams(): Promise<ITeam[]> {
    const teams = await Team.findAll() as ITeam[];
    if (!teams) {
      throw new HttpException(500, 'Internal server error');
    }

    return teams;
  }

  static async getTeamById(id: number): Promise<ITeam> {
    const team = await Team.findByPk(id) as ITeam;
    if (!team) {
      throw new HttpException(404, 'No team matches the provided id');
    }

    return team;
  }
}

export default TeamsService;

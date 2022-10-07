import IMatch from '../../interfaces/match.interface';

const Matches: object[] = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Grêmio'
    }
  },
  {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Internacional'
    }
  }
];

const Unfinished: object[] = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Grêmio'
    }
  },
  {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Internacional'
    }
  }
];

const Finished: object[] = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Grêmio'
    }
  },
  {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: 'Flamengo'
    },
    teamAway: {
      teamName: 'Internacional'
    }
  }
];

const NewMatch: object = {
  homeTeam: 16,
  awayTeam: 8,
  homeTeamGoals: 4,
  awayTeamGoals: 2,
  inProgress: true 
}

const SameMatch: object = {
  homeTeam: 16,
  awayTeam: 16,
  homeTeamGoals: 4,
  awayTeamGoals: 2,
  inProgress: true 
}

const NoMatch: object = {
  homeTeam: 99,
  awayTeam: 16,
  homeTeamGoals: 4,
  awayTeamGoals: 2,
  inProgress: true 
}

const WrongMatch: object = {
  awayTeam: 8,
  homeTeamGoals: 4,
  awayTeamGoals: 2,
  inProgress: true 
}

const CreatedMatch: object = {
  id: 1,
  homeTeam: 16,
  homeTeamGoals: 4,
  awayTeam: 8,
  awayTeamGoals: 2,
  inProgress: true,
}

export default Matches;
export { Unfinished, Finished, NewMatch, SameMatch, NoMatch, CreatedMatch, WrongMatch };

const totalPoints = `SUM(home_team_goals > away_team_goals) * 3 
+ SUM(home_team_goals = away_team_goals)`;

export default totalPoints;

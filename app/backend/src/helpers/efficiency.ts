const convertEfficiency = `CONVERT(((SUM(home_team_goals > away_team_goals) * 3) 
+ SUM(home_team_goals = away_team_goals)) / (COUNT(home_team) * 3) * 100, DECIMAL(10,2))`;

export default convertEfficiency;

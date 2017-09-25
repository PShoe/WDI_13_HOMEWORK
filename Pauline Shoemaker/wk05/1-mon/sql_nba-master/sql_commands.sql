SELECT * FROM players;

-- All columns for all players from the New York Knicks (NYK)
SELECT * FROM players WHERE team = 'NYK';
-- All columns for all players from the Indiana Packers (IND) who are under 26 years old
SELECT * FROM players WHERE team = 'IND' AND age < 26;
-- All columns for all players, ordered from least points scored to most points scored
SELECT * FROM players ORDER BY points ASC;
-- Name and Points per game (points/games), for the players with the top 20 points per game
SELECT name, (points/games) AS "Points per Game" FROM players ORDER BY "Points per Game" DESC LIMIT 20;
-- The average age for all players
SELECT AVG(age) FROM players;
-- The average age for all players on the Oklahoma City Thunder (OKC)
SELECT AVG(age) FROM players WHERE team = 'OKC';
-- The average age for all players who played more than 40 games
SELECT AVG(age) FROM players WHERE games > 40;
-- The team and total points scored from all players on that team (team points), ordered from most team points to least
--
SELECT team, SUM(points) AS "Total points" FROM players GROUP BY team;
-- ###Bonus

--
-- Age and the average points per game for that age, ordered from youngest to oldest
SELECT age, AVG(points/games) AS "Points per game by age" FROM players GROUP BY age ORDER BY age;
-- Team and the the number of players who score above 12 points per game on that team, ordered from most to least
SELECT DISTINCT team, COUNT(name) AS "Num of players who score 12+ /game" FROM players WHERE (points/games) > 12 GROUP BY team ORDER BY COUNT(name) DESC;
-- /// CHECKING ANSWERS
SELECT name, team, (points/games) AS "points per game" FROM players WHERE (points/games) > 12 ORDER BY team;

-- /// DO YOU NEED DISTINCT?
SELECT team, COUNT(name) AS "Num of players who score 12+ /game" FROM players WHERE (points/games) > 12 GROUP BY team ORDER BY COUNT(name) DESC;

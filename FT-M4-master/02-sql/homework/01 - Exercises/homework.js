/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = "SELECT * FROM   MOVIES where duration < 90 ";

const ejercicio03 = "SELECT * FROM  MOVIES WHRE YEAR between 1930 AND 1940";

const ejercicio04 = "SELECT * FROM  MOVIES where  TITLE LIKE ('%til%')";

const ejercicio05 = "SELECT * FROM  MOVIES WHERE CARDINALITY(actors)=1";

const ejercicio06 =
  "SELECT TITLE, AVG(rating) from movies, unnest(RATINGS)RATING group by title";

const ejercicio07 =
  "SELECT * FROM MOVIES WHERE title LIKE '%Fast and%' AND year = 2016";

module.exports = {
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
};

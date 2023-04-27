/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = "SELECT * FROM    movies where duration < 90 ";

const ejercicio03 = "SELECT * FROM  movies where year between 1930 and 1940";

const ejercicio04 = "SELECT * FROM  movies where title like ('%til%')";

const ejercicio05 = "SELECT * FROM  movies where cardinality(actors)=1";

const ejercicio06 =
  "SELECT TITLE, AVG(rating) from movies, unnest(ratings)rating group by title";

const ejercicio07 =
  "SELECT * FROM movies WHERE title LIKE '%Fast and%' AND year = 2016";

module.exports = {
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
};

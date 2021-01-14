const NumOfFilms= +prompt("Сколько фильмов вы уже посмотрели","");
const personalMovieDB={
    count: NumOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};
const a=prompt("Один из последних просмотренных фильмов?",""),
      b=+prompt("На сколько оцените его?",""),
       c=prompt("Один из последних просмотренных фильмов?",""),
          d=+prompt("На сколько оцените его?","");
          
personalMovieDB.movie[a]=b;
personalMovieDB.movie[c]=d;
console.log(personalMovieDB);
 
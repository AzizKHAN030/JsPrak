const NumOfFilms= +prompt("Сколько фильмов вы уже посмотрели","");
const personalMovieDB={
    count: NumOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};

for (let i=0; i<2;i++){
    
    const a=prompt("Один из последних просмотренных фильмов?",""),
    b=+prompt("На сколько оцените его?","");
    
    if (a!=null && b!=null && a!="" && b!="" && a.length<50 ) {
         personalMovieDB.movie[a]=b; 
    } else{
        console.log("Error");
        i--;
}    
}

if (personalMovieDB.count<10) {
    console.log("Просмотрено довольно мало фильмов");
}
else if(10<=personalMovieDB.count && personalMovieDB.coun<30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count>30) {
    console.log("Вы киноман!!!");
} else {
    console.log("Ошибка");
}
console.log(personalMovieDB);
 
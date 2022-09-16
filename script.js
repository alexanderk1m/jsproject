const numberOfFilms = prompt("how many movies did you wathc?", "");
console.log(numberOfFilms);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("last movie", ""),
    b = prompt("score the movie", ""),
    c = prompt("last movie", ""),
    d = prompt("score the movie", "");

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);
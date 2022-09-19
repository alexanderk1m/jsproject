

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how many movies have you watched", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("how many movies have you watched", "");
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("what is your last watched movie?", "");
        const b = prompt("score last watched movie?", "");

        if (a != null && b != null && a != '' && b != '' & a.length < 30) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectLevel() {
    if (numberOfFilms <= 10) {
        console.log('so so');
    } else if (numberOfFilms <= 30) {
        console.log('nah');
    } else if (numberOfFilms > 30) {
        console.log('good');
    } else {
        console.log('error');
    }
}

detectLevel();


function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        let score = prompt(`your favorite genre #${i + 1}`, "");
        personalMovieDB.genres[i] = score;
    }
}

writeYourGenres();


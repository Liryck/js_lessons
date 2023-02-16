let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Як багато фільмів Ви подивилися?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Як багато фільмів Ви подивилися?', '');
        } 
    },

};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Останніх переглянутих Вами фільмів?', ''),
              b = prompt('На скільки Ви його оцінете?', '');
    
        if (a != null && b != null && a != '' && b != ' && a.lenght < 50') {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто занадто мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log("Ви молодець");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    } else {
        console.log('Помилка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюбленний жанр під номером ${i}`, '');
    }
}

writeYourGenres();
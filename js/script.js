const numberOfFilms = +prompt('Як багато фільмів Ви подивилися?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Останніх переглянутих Вами фільмів?'),
      b = prompt('На скільки Ви його оцінете?'),
      c = prompt('Останніх переглянутих Вами фільмів?'),
      d = prompt('На скільки Ви його оцінете?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
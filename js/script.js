

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Як багато фільмів Ви подивилися?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Як багато фільмів Ви подивилися?', '');
    } 
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Останніх переглянутих Вами фільмів?', ''),
//       b = prompt('На скільки Ви його оцінете?', ''),
//       c = prompt('Останніх переглянутих Вами фільмів?', ''),
//       d = prompt('На скільки Ви його оцінете?', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

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



// Задачи:
// 1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// 3.При помощи цикла for выведите чётные числа от 2 до 10 включительно
// 4.Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//  Цикл, который нужно переписать:
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
// 5. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]


// function firstTask() {
//     let num = 5;
//     while (num<11){
//         console.log(num);
//         num++;
//     }
    
// }

// function secondTask() {
//     for (let i=20; i>10; i--) {
//         if (i===13) {
//             break;
//         }
//         console.log(i);
//     }
    
// }

// function thirdTask() {
//     for (let i=2; i<11; i++) {
//         if ( i % 2 === 0){
//             console.log(i);
//         }
//     }
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
    
// }

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
    
//     // Не трогаем
//     return arrayOfNumbers;
// }

// Задачи:

// 1. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// 2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// 3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
    
//     // Не трогаем
//     return result;
// }

// Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         }
//         if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }   
//     console.log(data);
//     // Не трогаем
//     return data;
// }

// Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
    
//     console.log(result);
//     // Не трогаем
//     return result;
// }


// Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i=0; i <= lines; i++) {
//     for (let j=0; j<lines-i; j++) {
//         result += " ";
//     }
//     for (let j=0; j<2*i+1; j++){
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

// // Задачи:
// // 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// // Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
// // 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
// // Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// // Примеры:
// // Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// // Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// // Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// // Вызов функции getMathResult(10, '5') даст ответ 10
// // Вызов функции getMathResult(10, 0) даст ответ 10
// // Вызов функции getMathResult(20, -5) даст ответ 20

// // First task
// function sayHello(name) {
//     return `Привіт, ${name}!`;
// }
// sayHello('Антон');

// // Second task
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// //Third task
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';
//     for (let i=1; i<=times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }

// getMathResult(3, 5);

// Задачи:

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// Место для первой задачи
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При обчислинні вийшла помилка";
    } 
    
    
    let volume = 0;
        area = 0;

    volume = length * length * length;
    area = (length * length) * 6;

    return `Об'єм куба: ${volume}, площа куба: ${area}`;
}

calculateVolumeAndArea(5);

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Помилка. Перевірте правильність введеного номеру місця";
    }
    
    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких місць у вагоні не буває";
    }
    

    return Math.ceil(seatNumber / 4);
    
}

getCoupeNumber(4);
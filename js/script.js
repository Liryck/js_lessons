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
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Переглянуто занадто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            console.log("Ви молодець");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else {
            console.log('Помилка');
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш улюбленний жанр під номером ${i}`, '');

            // if (genre === '' || genre == null) {
            //     console.log('Ты кого хочешь наебать? Ааа?');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt(`Введите ваши любимые жары через запятую`, '').toLocaleLowerCase();
            if (genres === '' || genres == null) {
                console.log('Ты кого хочешь наебать? Ааа?');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    } 
};



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

// // Задачи:

// // 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// // Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// // Место для первой задачи
// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При обчислинні вийшла помилка";
//     } 
    
    
//     let volume = 0;
//         area = 0;

//     volume = length * length * length;
//     area = (length * length) * 6;

//     return `Об'єм куба: ${volume}, площа куба: ${area}`;
// }

// calculateVolumeAndArea(5);

// // 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// // Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
// // Функция принимает только целое число от 1 до 36.
// // Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// // "Ошибка. Проверьте правильность введенного номера места"
// // Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// // Место для второй задачи
// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Помилка. Перевірте правильність введеного номеру місця";
//     }
    
//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких місць у вагоні не буває";
//     }
    

//     return Math.ceil(seatNumber / 4);
    
// }

// getCoupeNumber(4);


// // Задачи
// // 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// // Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// // Пример:
// // getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// // Место для первой задачи
// function getTimeFromMinutes(time) {
//     if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
//         return "Помилка. Перевірте данні";
//     }
//     if (time > 600) {
//         return "Занадто багато. Спробуй менше";
//     }
//     let hours = 0;
//         minutes = 0;

//     hours = Math.floor(time / 60);
//     minutes = time % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'годин';
//             break;
//         case 1:
//             hoursStr = 'година';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'години';
//             break;
//         default:
//             hoursStr = 'годин';
//     }
    
//     return `Це ${hours} ${hoursStr} і ${minutes} хвилини`;
// }

// getTimeFromMinutes(109);

// // 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// // Пример:
// // findMaxNumber(1, 5, 6.6, 11); =>  11
// // findMaxNumber(1, 5, '6', '10');  =>  0

// // Место для второй задачи
// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');


// // Задача:
// // Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// // Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// // Пример:
// // fib(4) => ''0 1 1 2"
// // fib(7) => ''0 1 1 2 3 5 8"
// // fib('7') => ''"

// function fib(num) {
//     if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
//         return " ";
//     }
//     let result = "";
//         first = 0;
//         second = 1;
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return result;
// }
// fib(7);



// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;

//         let str = `Мені ${age} і я володію мовами:`;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()}`;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// function showExperience(plan) {
//     const {exp} = plan.skills;

//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Мова ${key} вивчена на ${programmingLangs[key]} \n`;
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// // console.log(Object.keys(options).length); 
// // додали метод для створення масиву де ключі це його елементи. Потім додаємо властивість для визначення довжини масиву


// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Властивість ${i} має значення ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Властивість ${key} має значення ${options[key]}`);
//         counter++;
        
//     }
// }

// console.log(counter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(persons => {
//         str += `${persons} `;
//     });

//     return str;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }

//     return str.split('').reverse().join('');
// }

// reverse(someString);


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'PLZ', 'CNY'];


// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.lenght === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    
//     arr.forEach(function(curr, i){
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     return str;
    
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach (shop => {
//         square += shop.width * shop.length;
//     });

//     volume = square * data.height;
//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();

//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }

//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];

// }

// sortStudentsByGroups(students);


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};



function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}
console.log(isOpen(restorantData.openNow));


function isAverageLunchPriceTrue(fDish, sDish, average) { 
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData.waitors);
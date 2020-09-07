// Функция обратного вызова
// Функция может принимать значение другой функции как параметр
//функцию можно передавать как аргумент в другую функцию
//Фунцкция, которая передается в другую функцию как аргумент, называется цункция обратного порядка(вызова) (callback-функция)
//Функция, которая принимает другую функцию как парметр,или вызывает другую функцию, называется функция высшего порядка

// const fnA = function (message, callback) {
//     consol.log(message);
//     console.log(callback);
//     callback (100);
// };

// const fnB = function (number) {
//     console.log('это log  при вызове b', number)
// };

// fnA('irvbui', fnB);

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

doMath(2, 3, function (x, y) {
  return x + y;
});
doMath(2, 3, function (x, y) {
  return x - y;
});

//Приватные данные и функции
const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      salary += amount;
    },
    lower(amount) {
      salry -= amount;
    },
    current() {
      return `Текущая зарплата $(employeeName) - $(salary)`;
    },
  };
};

const salaryManager = salaryManagerFactor(`Mango`, 5000);
console.log(salaryManager.current());

/в то что лежит в замыкании из внешнего кода доступа нет/;

// Стрелочные функции

const add = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
};

console.log(add(5, 10, 15));

//синтаксис стрелочной функции более короткий, удобно использовать в callback функциях: точно также объявляем переменную, но не пишем после равно слово функция, а сразу записываем параметры в пузатых скобках и ставим стрелку =>

const add1 = (a, b, c) => {
  console.log(arguments);
  return a + b + c;
};

console.log(add1(5, 10, 15));

//если параметров 2 и больше пузатые скобки при обьявлении стрелочной функции обязательны, если параметр один, их можно опустить

//если параметров вообще нет, ставим пустые скобки пузатые

//если у стрелочной функции должно быть тело, то после стрелки ставим тело и return

const add1 = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
//неявный возврат - если в стрелочной функции есть только return, синтаксис можно сильно упростить

const add1 = (a, b, c) => a + b + c;

//у стрелочной функции нет локальной переменной arguments, чтобы собрать все аргументы используем rest

const addArrow = (...args) => {
  console.log(args);
};

console.log(addArrow(5, 10, 15));

//неявный возврат объекта

const fnA = function () {
  return {
    a: 5,
  };
};

console.log(fnA());

//перепишем ф-цию на стрелочную

const arrowFnA = () => ({ arrowA: 5 });

//filter

const filter = (array.test) => {};

const r1 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
console.log(r1);

//**Операция spread (распыление) */
//Array.prototype.concat() и аналог через spread

//const numbers = [1, 2, 2].concat([4, 5, 6], [7, 8, 9]);//метод конкатенации
const numbers = (...[0, 5, 10, 1,2,3], 4,5);//метод распыления
//console.log(numbers);

//**ПОиск самой маленькой или большой температуры(числа) */

const temps = [18, 14, 12, 85, 35, 21, 5];

//**Сшиваем несколько массивов в один через concat и spread */

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

//**Распыление объектов */
//**Object.prototype.assign() и spread */

const a = { x=1, y=2 };
const b = { x=0, z=3 };

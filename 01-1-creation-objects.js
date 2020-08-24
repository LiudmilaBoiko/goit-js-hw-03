//**Объекты: делаем плейлист музыки: имя, рейтинг, тнеки, кол-во треков */
//**литерал объекта */
//**Св-ва, ключи(имя) и значения */

const playlist = {
  name: "Мой супер плейлист", //*свойство, состоит тз ключа и значения
  rating: 5,
  tracks: ["трек-1", "трек-2", [трек - 3]],
  trackCount: 3,
};
//*имена ключей внутри одного объекта уникальны
console.log(playlist);

//**Как отличить объект от области видимости */
//**литерал объекта может существовать только справа от равно в операции присваивания: */
const x = {}; //*когда объявляем обьект в переменной
console.log({}); //*когда передаем аргумент в функцию
const rtfn = function () {
  return {};
}; //*когда возвращаем из функции литерал объекта

//*Доступ к свойству
console.log(playlist.tracks); //*1st method
console.log(playlist["rating"]); //*2nd method

//*бывает что имя ключа хранится в переменной:
const propertyName = "tracks";
console.log(playlist["propertyName"]); //*получим все треки

//*короткая запись свойства
*/
const username = 'Mango';
const email = 'mangomail.com';

const signupData = {
    username: username,
    email: email,
};

console.log(signupData);

//**если имя свойства(ключ) совпадает с именем переменной, можем использовать короткую запись: */
const username = 'Mango';
const email = 'mangomail.com';

const signupData = {
    username,
    email,
};

console.log(signupData);


//**Вычисляемые свойства */
//**<input name='color' value='tomato'> */
//**если нужно динамически записать ключ, слева от двоеточия ставим квадратные скобки и туда записываем имя переменной, ее значение станет ключем */

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
};

console.log(colorPickerData);  

//**в объекты после их создания можно добавлять свойства: */

const playlist = {
    name: "Мой супер плейлист", //*свойство, состоит тз ключа и значения
    rating: 5,
    tracks: ["трек-1", "трек-2", [трек - 3]],
    trackCount: 3,
};
playlist.qwe = 5;//*если такого совйства еще нет, оно добавится
playlist.rating = 10;//*если такое свойство уже есть, оно переопределится

console.log(playlist);

//**Ссылочный тип {} или ( ) */
const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); //*true потому что в определении переменной b записывается ссылка на место в памяти где лежит объект а, т. о. они равны по ссылке

//**Массивы и функции это объекты */

const a = [1, 2, 3];

a.hello = ':)';

console.log(a);

//**то же самое с функцией */
const fn = function () {
    console.log('hello');
};

fn.hello = ':)';

console.dir(fn,hello);
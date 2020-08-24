//**Перебор через for...in и Object.keys|values|entries */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback); //*пожалуйста получи массив ключей из объекта feedback

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback:', totalFeedback);

//**for in лучше не использовать, так как он перебирает еще и унаследованные свойства, также он не используется для массивов */

//** */
//**второй способ */
//** */
const values = Object.values(feedback); //**возвращает массив значений */

console.log(values);

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log("totalFeedback:", totalFeedback);

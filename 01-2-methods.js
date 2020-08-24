//*
//* методы объекта и this при обращении к свойствам в методах*/

//**changeName */
//*addTrack*/
//**updateRating */
//**getTrackCount */

//*допустим я хочу сделать метод объекта, записываю свойство, в которой лежит функция
// const playlist = {
//   name: "Мой супер плейлист", //*свойство, состоит тз ключа и значения
//   rating: 5,
//   tracks: ["трек-1", "трек-2", [трек - 3]],
//   trackCount: 3,
//   getName: function () {
//     console.log("Ага это getName:");
//   },
// };

console.log(playlist);

//**чтобы вызвать функцию(метод объекта) */
// playlist.getName();

//*методы работают со свойствами объектов
//*современное объявление метода:
// getName: function () {
//     console.log("Ага это getName:");
// },//**- это олдскул, современная запись метода объекта : */

// getName () {
//     console.log("Ага это getName:");
// },

//**Создадим метод */
const playlist = {
  name: "Мой супер плейлист", //*свойство, состоит тз ключа и значения
  rating: 5,
  tracks: ["трек-1", "трек-2", [трек - 3]],
  changeName(newName) {
    console.log(this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist);

playlist.changeName("Новое имя!");

playlist.addTrack("Новый трек!");

playlist.updateRating(4);

console.log(playlist);

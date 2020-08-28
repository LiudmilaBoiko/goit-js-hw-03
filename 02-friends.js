/**Работа с коллекцией (массивом объектов) */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

// for (const friend of friends) {
//   console.log(friend.name);
//   console.log(friend);
// }

//**Ищем друга по имени */

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);
    if (friend.name === friendName) {
      return "нашли!!!";
    }
  }
  return "не нашли";
};
// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

//**Получаем имена всех друзей */
const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
  console.log(names);
};

// console.log(getAllNames(friends));

//**Получаем только имена друзей, которые онлайн */

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of friends) {
    console.log(friend);
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

// console.log(getOnlineFriends(friends));

//**Получаем только имена друзей, которые офлайн */

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];
  for (const friend of friends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

//**создать 2 массива онлайн и оффлайн, если тру в первый записываем, если фолс - во второй */
const getFriendByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of friends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }
  return friendsByStatus;
};

// console.log(getFriendByOnlineStatus(friends));

//**посчитать количество элементов в массиве */
const x = {
  a: 1,
  b: 3,
  c: 5,
  d: 8,
};

console.log(Object.keys(x).length);

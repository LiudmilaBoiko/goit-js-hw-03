let message = '';
const user = {
    age: 20,
    hobby: 'html',
    name: 'Mango',
    premium: true,
};

//Write code under this line  
user.mood = 'happy',
    user.hobby = 'skydiving',
    user.premium = 'false',
    user.fulltime = 'true',


const keys = Object.keys(user);
// Write code under this line
console.log(keys);

for (const key of keys) {
    console.log(key);
    console.log(feedback[key]);

    message = user[key];
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
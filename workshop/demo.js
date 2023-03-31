// var vs let

// function usingVar() {
//     var x = 1;
//     console.log(1);

//     if (true) {
//         var x = 2;
//         console.log(x);
//     }

//     console.log(x);
// }

// function usingLet() {
//     let x = 1;
//     console.log(1);

//     if (true) {
//         let x = 2;
//         console.log(x);
//     }

//     console.log(x);
// }

// string templates
const user = { username: 'Samridh', age: 20 };

console.log(user.username + ' is ' + user.age + ' years old!');
console.log(`${user.username} is ${user.age} years old!!!`);

// shortcuts while making objects

const x = 100;
const y = 200;

const p1 = { x: x, y: y };
console.log(p1);

const p2 = { x, y };
console.log(p2);

// unpacking objects
const { username, age } = user;
console.log(`Mr. ${username} is ${age} years old!!!`);

// unpacking arrays
const ar1 = [1, 2, 3];
const [first, second, third] = ar1;
console.log({ first, second, third });

// asynchronous code

// callbacks

function getName1(callback) {
    const name = prompt('What is your name?');
    callback(name);
}

// getName1(name => console.log(name));

// promises

function getName2() {
    return new Promise((resolve, reject) => {
        const name = prompt('What is your name?');
        resolve(name);
        if (name === '123') reject('name cannot be 123');
    });
}

// getName2().then(name => console.log(name));

// fetching data

// let users = [];
// console.log(users);

fetch('https://reqres.in/api/users?page=2').then(response => {
    console.log(`the request returned ${response.status}`);
    console.log(response.json());
});

fetch('https://reqres.in/api/users?page=2')
    .then(response => {
        console.log(`the request returned ${response.status}`);
        // console.log(response.json());
        return response.json();
    })
    .then(json => console.log(json));

// async await

async function asyncFetch() {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const json = await response.json();
    console.log(json);
}

asyncFetch();

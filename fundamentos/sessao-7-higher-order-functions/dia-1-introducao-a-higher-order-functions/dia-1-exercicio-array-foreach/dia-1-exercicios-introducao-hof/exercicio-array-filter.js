const users = [
    {
      name: 'Yazeed',
      age: 25
    },
    {
      name: 'Sam',
      age: 30
    },
    {
      name: 'Bill',
      age: 20
    }
];

//
// HOF Filter - Return first name start with letter b.
//

const startsWithB = (string) => string.toLowerCase().startsWith('b');

const namesStartingWithB = users.filter((user) => startsWithB(user.name));

console.log(namesStartingWithB);
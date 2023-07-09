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

// HOF Map - Get user names

const userNames = users.map((user) => user.name);

console.log(userNames);

// Sem HOF map
/* 
const getName = (user) => user.name;

const usernames = [];

for (let i = 0; i < users.length; i += 1) {
  const name = getName(users[i]);

  usernames.push(name);
}

console.log(usernames);
*/
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
// HOF Reduce - return total sum of ages
//

const totalAge = users.reduce((total, user) => user.age + total, 0);

console.log(totalAge);
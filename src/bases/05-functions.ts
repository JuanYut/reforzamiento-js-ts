function greet(name: string): string {
  return `Hola ${name}!!!`;
}
const message = greet("Goku");
console.log(message);

/* ---------------------------------------------------------- */

const greet2 = (name: string): string => `Hola ${name}!!!`;
const message2 = greet2("Vegeta");
console.log(message2);

/* ---------------------------------------------------------- */

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: "abc-111",
    username: "juanyut",
  };
}
const user = getUser();
console.log(user);

const getUser2 = () => ({
  uid: "abc-222",
  username: "juanyut",
});
const user2 = getUser2();
console.log(user2);

/* ---------------------------------------------------------- */

const myNumbers = [1, 2, 3, 4, 5];
myNumbers.forEach(function (value) {
  console.log(value);
});

myNumbers.forEach((value) => console.log(value));

// myNumbers.forEach(console.log);

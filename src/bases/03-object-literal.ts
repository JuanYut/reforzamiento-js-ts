const ironman = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  addres: {
    postalCode: "1997DCMarvel",
    city: "New York",
  },
};

// Esto copia el objeto pero solo a primer nivel no a profundidad.
const spiderman = { ...ironman };
spiderman.firstName = "Peter";
spiderman.lastName = "Parker";

// Con esto haces una copia de un objeto de forma profunda.
const batman = structuredClone(ironman);
batman.firstName = "Bruce";
batman.lastName = "Wayne";

console.log(spiderman, ironman, batman);

/* ----------------------------------------------------------------- */

interface Hero {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const superman: Hero = {
  firstName: "Clark",
  lastName: "Ken",
  age: 29,
};

const robin: Hero = {
  firstName: "Dick",
  lastName: "Greyson",
  age: 20,
};

console.log(superman, robin);

const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { name: ironmanName, age, key } = person;
console.log(ironmanName, age, key);

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ name, age, key, rank = "Sin rango" }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    finalRank: rank,
  };
};

const {
  finalRank,
  keyName,
  user: { name },
} = useContext(person);
console.log(finalRank, keyName, name);

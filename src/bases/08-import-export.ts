import { heroes, type Hero } from "../data/heroes.data";

const getHeroeById = (id: number): Hero => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  if (!hero) {
    throw new Error(`No existe un héroe con el id ${id}`);
  }

  return hero;
};

console.log(getHeroeById(1));

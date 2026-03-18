import { heroes, type Owner } from "../data/heroes.data";

export const getHeroesByOwner = (owner: Owner) =>
  heroes.filter((hero) => hero.owner === owner);

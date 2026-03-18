const characterNames = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = characterNames;
console.log({ p3 });

const returnsArrayFn = () => {
  return ["abc", 123] as const;
};
const [letters, numbers] = returnsArrayFn();
console.log(letters + 100); // Va a concatenar
console.log(numbers + 100); // Va a sumar

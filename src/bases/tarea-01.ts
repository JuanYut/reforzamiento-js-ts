const useState = (name: string) => {
  return [
    name,
    (text: string) => {
      console.log(`Hola soy la función anidada: ${text}`);
    },
  ] as const;
};

const [name, setName] = useState("Goku");
console.log(name); // Goku
setName("Vegeta"); // Imprime "Vegeta"

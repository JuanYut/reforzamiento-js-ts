const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // YO QUIERO MI DINERO.
    // resolve(100);
    reject("Mi amigo no pago :(");
  }, 2000); // 2 segundos
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally(() => {
    console.log("Pues a seguir con mi vida...");
  });

const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! yo quiero mi dinero !!
    //resolve(100); //se resuelve correctamente
    reject("Mi amigo se perdió");
  }, 2000); //2 segundos
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => console.log(reason))
  .finally(() => console.log("Pues a seguir con mi vida"));

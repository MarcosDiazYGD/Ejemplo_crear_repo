(() => {
  const user: [string, number, boolean] = ["Marcos", 19, true];
  //? Según la definicion de la tupla es el tipo de dato que recibe cada posición del arreglo
  /*
  user[0] = true
  user[1] = 'Martha'
  user[2] = 19
 */
  user[0] = "Martha";
  user[1] = 19;
  user[2] = false;

  const brandPriceCars: [string, number] = ["bmw", 230000000000];
})();

(() => {

  type Hero = { 
    name: string,
    age: number,
    power: string[],
    getName?: () => string
  }



  let myCustomVariable: (string | number | Hero) = 'Marcos Diaz'
  console.log(myCustomVariable);





})()
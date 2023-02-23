(() => {
  function sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  function greet(name: string): string{
    return 'Hola ' + name;
  }

  function saveTheWord ():string {
    return `The word is saved`
  }



  // let myFunction: Function
  // let myFunction: (a:number, b:number) => number
  // let myFunction: (a:string) => string
  let myFunction: () => string
  
  
  // myFunction = 10;
  // console.log(myFunction);

  // myFunction = sum
  // console.log(myFunction(1,2));


  // myFunction = greet
  // console.log(myFunction('Marcos'));


  myFunction = saveTheWord
  console.log(myFunction());




})();

(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string]= [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum heroPower {
    Acuaman = 0,
    Batman = 1,
    Flash = 5,
    Superman = 100
  };
  const fuerzaFlash: heroPower = heroPower.Flash;
  const fuerzaSuperman: heroPower = heroPower.Superman;
  const fuerzaBatman: heroPower = heroPower.Batman;
  const fuerzaAcuaman: heroPower = heroPower.Acuaman;

  // Retorno de funciones
  function activar_batiseñal():string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log( "Auxilio!!!");
   }
  // console.log(pedir_ayuda());
  // console.log(activar_batiseñal());

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();

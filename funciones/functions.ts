(()=>{

    const hero: string = 'Flash'


    // es importante declarar el tipo de dato que va a retornar
    function returnName(): string {
        // el tipo de dato depende, en este caso de <<hero>>
        return hero
    };


    const activateBatiSignal = (): string => {
        return 'Batiseñal activada'
    };
    
    
    console.log(typeof(activateBatiSignal));
    
    
    // En este caso el tipo de dato dependera de la funcion invocada <<returName>>
    const heroName = returnName();
    

})()
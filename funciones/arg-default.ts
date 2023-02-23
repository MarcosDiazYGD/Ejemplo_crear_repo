( () => {
  const name = (firstName: string, lastName?: string, upper: boolean = false): string => {
    if (upper) {
      return (`${firstName} ${lastName}`).toUpperCase()
    }else {
      return `${firstName} ${lastName}`
    }


  };

  console.log(name('Marcos', 'Diaz', true));
}

)()
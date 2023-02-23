( () => {
  const name = (firstName: string, lastName?: string, upper: boolean = false): string => {
    return `${firstName} ${lastName}`;

  };

  console.log(name('Maros', 'Diaz'));
}

)()
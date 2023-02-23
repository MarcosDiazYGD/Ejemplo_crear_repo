( () => {
  const name = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || ''}`;

  };

  console.log(name('Maros' ));
}

)()
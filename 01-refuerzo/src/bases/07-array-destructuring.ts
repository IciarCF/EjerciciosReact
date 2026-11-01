const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [,p2] = characterNames;
console.log({p2});

const [, , trunks] = characterNames;
console.log({trunks});

const returnsArrayFn = () => {
    return ['ABC', 123] as const //esto lo que le indica a TS que siempre va a devolver primero un string y un numero
}

const [letters, numbers] = returnsArrayFn();


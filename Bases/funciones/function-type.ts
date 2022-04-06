(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;

    let myFunction: () => string;
    // myFunction = 10;

    // console.log(myFunction);

    // myFunction = addNumbers // e le pasa la referencia de addNumbers
    // console.log(myFunction(1, 2));

    // myFunction = greet; // se le pasa la referencia
    // console.log(myFunction('Loreliz'));

    myFunction = saveTheWorld; // se le pasa la referencia
    console.log(myFunction());

})()
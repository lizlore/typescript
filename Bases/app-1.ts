let b: string;

function sayHello(msg: string) {
    console.log(msg + ' ' + 'loreliz');
};

// Función anonima autoinvocada
(() => {
    const a: number = 10;
    console.log(a);
})()

sayHello('Buenos dias');
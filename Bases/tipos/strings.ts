(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = "Heroe: Volcan Negro";

    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(batman[10]?.toUpperCase() || 'No está presente');
})()
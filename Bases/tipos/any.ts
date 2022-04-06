(() => {
    let avenger: any = 123;
    let exist;
    let power;

    avenger = 'Dr. Strange';
    // console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0)); // un tipo de casteo

    avenger = 150.235456556656;
    // console.log(avenger.toFixed(4));
    console.log(<number>avenger.toFixed(4)); // otro tipo de casteo

    console.log(exist);
    console.log(power);
})()
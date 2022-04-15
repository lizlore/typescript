define(["require", "exports", "../generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, generics_1.printObject)(123);
    (0, generics_1.printObject)(new Date());
    (0, generics_1.printObject)({ a: 1, b: 2, c: 3 });
    (0, generics_1.printObject)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    (0, generics_1.printObject)("Hola Mundo");
    const name = "Loreliz";
    console.log((0, generics_1.genericFunctionArrow)(3.141618).toFixed(2));
    console.log((0, generics_1.genericFunctionArrow)(name).toUpperCase());
    console.log((0, generics_1.genericFunctionArrow)(new Date()).getDate());
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool));
});

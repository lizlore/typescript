(() => {
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {

        }
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!'
        }
    }
    class Villian extends Mutante {
        consquistarMundo() {
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    console.log(wolverine);
    console.log(magneto);

    console.log(wolverine.salvarMundo());
    console.log(magneto.consquistarMundo());

    const printName = (character: Mutante) => {
        console.log(character.name);
    }

    printName(magneto);


})()
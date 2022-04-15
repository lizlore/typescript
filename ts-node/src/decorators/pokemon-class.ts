function prinToConsole(constructor: Function) {
    console.log(constructor)
}

@prinToConsole
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co'

    constructor(public name: string) {

    }
}
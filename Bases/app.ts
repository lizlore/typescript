// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Car): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Car = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Character {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
  methodReir?: (guason: Character) => void
}

interface MethodReir {
  (guason: Character): void;
}

const guason: Character = {
  reir: true,
  comer: true,
  llorar: false
}

const reir: MethodReir = (guason: Character): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface City {
  (ciudadanos: string[]): number;
}

const ciudadGotica: City = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Person {
  name: string;
  age: number;
  gender: string;
  civilStatus: string;
  printBio(): void;
}

class Persona implements Person {
  public name: string;
  public age: number;
  public gender: string;
  public civilStatus: string;

  printBio(): void {
    console.log('Clase Persona que implementa la interfaz Person');
  }
}
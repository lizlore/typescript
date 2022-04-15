import axios from 'axios';
import { Pokemon } from '../classes/interfaces/pokemon';

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    console.log(data.name);
    return data;
}
import {pokeApi} from '../api/api';

export const getPokemon = async (nameOrId: string | number) => {
  return await pokeApi.get(`pokemon/${nameOrId}`);
};

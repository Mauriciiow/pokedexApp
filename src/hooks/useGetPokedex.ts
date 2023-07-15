import {pokeApi} from '../api/api';

export const getPokedex = async () => {
  return await pokeApi.get('pokedex/1');
};

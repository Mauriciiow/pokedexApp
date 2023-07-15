import {pokeApi} from '../api/api';

export const getListPokemons = async (numList: number) => {
  return await pokeApi.get(`pokemon/?limit=${numList}`);
};

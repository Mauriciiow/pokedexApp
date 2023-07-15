import {pokeApi} from '../api/api';

export const getSpecie = async (nameOrId: string | number) => {
  return await pokeApi.get(`pokemon-species/${nameOrId}`);
};

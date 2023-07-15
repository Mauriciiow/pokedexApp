import {ListProps} from '../pages/Pokedex';
import {arrayForGen} from '../utils/getArrayForGen';
import {getPokedex} from './useGetPokedex';

export const getListForGen = async (
  gen: number,
  setLists: React.Dispatch<React.SetStateAction<ListProps[] | undefined>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setFiltered: React.Dispatch<React.SetStateAction<ListProps[] | undefined>>,
) => {
  switch (gen) {
    case 1:
      const gen1 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        0,
        151,
      );

      setLists(gen1);
      setFiltered(gen1);
      setLoading(false);
      break;
    case 2:
      const gen2 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        152,
        251,
      );
      setLists(gen2);
      setFiltered(gen2);
      setLoading(false);
      break;
    case 3:
      const gen3 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        252,
        386,
      );
      setLists(gen3);
      setFiltered(gen3);
      setLoading(false);
      break;
    case 4:
      const gen4 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        387,
        493,
      );
      setLists(gen4);
      setFiltered(gen4);
      setLoading(false);
      break;
    case 5:
      const gen5 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        494,
        649,
      );
      setLists(gen5);
      setFiltered(gen5);
      setLoading(false);
      break;
    case 6:
      const gen6 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        650,
        721,
      );
      setLists(gen6);
      setFiltered(gen6);
      setLoading(false);
      break;
    case 7:
      const gen7 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        722,
        809,
      );
      setLists(gen7);
      setFiltered(gen7);
      setLoading(false);
      break;
    case 8:
      const gen8 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        810,
        905,
      );
      setLists(gen8);
      setFiltered(gen8);
      setLoading(false);
      break;
    case 9:
      const gen9 = arrayForGen(
        (await getPokedex()).data.pokemon_entries,
        906,
        1010,
      );
      setLists(gen9);
      setFiltered(gen9);
      setLoading(false);
      break;
    default:
      break;
  }
};

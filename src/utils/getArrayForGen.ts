import {ListProps} from '../pages/Pokedex';

export const arrayForGen = (
  array: ListProps[],
  firstNumber: number,
  secondNumber: number,
) => {
  return array.slice(firstNumber, secondNumber);
};

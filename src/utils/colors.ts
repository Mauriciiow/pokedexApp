const colors = {
  fire: '#ff9e53',
  electric: '#fecd4a',
  water: '#4e92d6',
  grass: '#5fba55',
  bug: '#90c12b',
  dragon: '#0770bf',
  normal: '#9099a1',
  ghost: '#5369ac',
  fighting: '#d8425d',
  psychic: '#f86d73',
  poison: '#a866c8',
  rock: '#c7b88b',
  ground: '#d97745',
  fairy: '#ed8fe5',
  ice: '#74cfc1',
  dark: '#5a5366',
  steel: '#53889c',
  flying: '#91aade',
};

export type Color = keyof typeof colors;

export const ColorsSelector = (type: Color | undefined) => {
  return type ? colors[type] : '#5fba55';
};

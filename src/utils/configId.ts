export const configID = (url: string) => {
  let idString = url
    .replace('https://pokeapi.co/api/v2/pokemon-species/', '')
    .replace('/', '');

  if (idString.length === 1) {
    return `00${idString}`;
  } else if (idString.length === 2) {
    return `0${idString}`;
  }

  return idString;
};

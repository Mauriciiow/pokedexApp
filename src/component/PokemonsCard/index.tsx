import React, {useEffect, useState} from 'react';
import * as S from './pokemons.styles';
import {ListProps} from '../../pages/Pokedex';
import {configID} from '../../utils/configId';
import {getPokemon} from '../../hooks/useGetPokemon';
import {firstLetterUpper} from '../../utils/upperCaseFirstLetter';
import {View} from 'react-native';
import {StackProps, StackScreenNavigationProp} from '../../router/stack.route';
import {useNavigation} from '@react-navigation/native';
import {TypeText} from '../TypeText';

type CardPropsPokemon = {
  data: ListProps;
};
type PokeList = {
  forms: [{name: string; url: string}];
  types: [
    {slot: string; type: {name: string; url: string}},
    {slot: string; type: {name: string; url: string}},
  ];
};
export const PokemonsCard = ({data}: CardPropsPokemon) => {
  const [pokes, setPokes] = useState<PokeList>();
  const [loading, setLoading] = useState(false);
  const nav = useNavigation<StackScreenNavigationProp>();
  useEffect(() => {
    const getPokemonsForId = async () => {
      const pokemons = await getPokemon(data.entry_number.toString());
      const dataPokes = {
        forms: pokemons.data.forms,
        types: pokemons.data.types,
      };

      setPokes(dataPokes);
      setLoading(true);
    };
    getPokemonsForId();
  }, [data.entry_number]);
  const type2Exists = loading && pokes?.types[1] ? true : false;
  return (
    <S.Container
      onPress={() =>
        nav.navigate('Info', {
          id: data.entry_number,
          type1: pokes?.types[0].type.name,
          type2:
            loading && pokes?.types[1]
              ? firstLetterUpper(pokes?.types[1].type.name)
              : '',
          name: pokes?.forms[0].name,
        })
      }
      color={(loading ? pokes?.types[0].type.name : 'red') as string}>
      <S.Content>
        <S.ViewText>
          <S.PokemonName>
            {loading
              ? firstLetterUpper(pokes?.forms[0].name as string)
              : 'loading...'}
          </S.PokemonName>
          <S.ViewTypeText>
            <TypeText
              text={
                loading
                  ? firstLetterUpper(pokes?.types[0].type.name as string)
                  : 'loading...'
              }
            />
          </S.ViewTypeText>
          <S.ViewTypeText>
            {loading && pokes?.types[1] && (
              <TypeText
                style={{marginTop: 5}}
                text={
                  loading && pokes?.types[1]
                    ? firstLetterUpper(pokes?.types[1].type.name as string)
                    : ''
                }
              />
            )}
          </S.ViewTypeText>
        </S.ViewText>

        <S.ViewImage typeExists={type2Exists}>
          <S.PokemonImage
            resizeMode="contain"
            source={{
              uri: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${configID(
                data.pokemon_species.url,
              )}.png`,
            }}
          />
        </S.ViewImage>
      </S.Content>
    </S.Container>
  );
};

import React, {useEffect, useState} from 'react';
import {
  Background,
  Container,
  Content,
  Id,
  NamePokemon,
  ViewHeader,
  ViewNameAndId,
  ViewTypes,
  PokemonImage,
  ViewImage,
  ViewTabs,
} from './info.styles';
import {Header} from '../../component/Header';
import {StackProps} from '../../router/stack.route';
import {Text} from 'react-native';
import {configID} from '../../utils/configId';
import {firstLetterUpper} from '../../utils/upperCaseFirstLetter';
import {TypeText} from '../../component/TypeText';
import {MyTabs} from '../../router/top.tab.route';
import {getPokemon} from '../../hooks/useGetPokemon';
import {getSpecie} from '../../hooks/useGetSpecie';
import {hectogramToKg} from '../../utils/hectogramToKg';
import {decimToM} from '../../utils/decimToCm';

export type StatsProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};
export type AboutProps = {
  description: string;
  eggGroup: [
    {
      name: string;
      url: string;
    },
  ];

  weight: number;
  height: number;
};

export const InfoPokemon = ({route}: StackProps) => {
  const {id, type1, type2, name} = route?.params;

  const [loading, setLoading] = useState<boolean>(false);
  const [about, setAbout] = useState<AboutProps>();
  const [stats, setStats] = useState<StatsProps>();

  useEffect(() => {
    const getInfo = async () => {
      const poke = await getPokemon(id);
      const infos = await getSpecie(id);
      setStats({
        hp: poke.data.stats[5].base_stat,
        attack: poke.data.stats[4].base_stat,
        defense: poke.data.stats[3].base_stat,
        speed: poke.data.stats[0].base_stat,
      });
      setAbout({
        description: infos.data.flavor_text_entries[8].flavor_text.replace(
          /(\r\n|\n|\r)/gm,
          '',
        ),
        eggGroup: infos.data.egg_groups,
        height: decimToM(poke.data.height),
        weight: hectogramToKg(poke.data.weight),
      });

      setLoading(true);
    };
    getInfo();
  });

  return (
    <Container>
      <Background resizeMode="cover" color={type1}>
        <ViewHeader>
          <Header
            iconRight={{
              name: 'heart',
              size: 20,
              color: '#fff',
              onPress: () => console.warn(name),
            }}
            colorLeft="#fff"
          />
          <ViewNameAndId>
            <NamePokemon>{firstLetterUpper(name)}</NamePokemon>
            <Id>#{configID(id.toString())}</Id>
          </ViewNameAndId>
          <ViewTypes>
            <TypeText text={firstLetterUpper(type1)} style={{marginRight: 5}} />
            {type2 && <TypeText text={type2} />}
          </ViewTypes>
        </ViewHeader>

        <Content>
          <ViewImage>
            <PokemonImage
              source={{
                uri: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${configID(
                  id.toString(),
                )}.png`,
              }}
            />
          </ViewImage>
        </Content>
      </Background>
      <ViewTabs>
        <MyTabs about={about} loading={loading} stats={stats} type={type1} />
      </ViewTabs>
    </Container>
  );
};

import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {CardColorProps} from '../../component/PokemonsCard/pokemons.styles';
import {Color, ColorsSelector} from '../../utils/colors';
const screenHeight = Dimensions.get('window').height / 2;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const ViewHeader = styled.SafeAreaView`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
`;

export const Background = styled.ImageBackground<CardColorProps>`
  background-color: ${({color}) => ColorsSelector(color as Color)};
  height: ${screenHeight.toFixed()}px;
`;

export const Content = styled.ImageBackground`
  flex: 1;
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: 200px;
`;
export const ViewTypes = styled.View`
  flex-direction: row;
`;

export const ViewNameAndId = styled.View`
  margin-top: 23px;
  margin-bottom: 7px;
  flex-direction: row;
  justify-content: space-between;
`;
export const NamePokemon = styled.Text`
  color: white;
  font-size: 34px;
  font-weight: bold;
`;
export const Id = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const PokemonImage = styled.Image`
  width: 180px;
  height: 180px;
  margin-right: 8px;
  margin-top: -220px;
`;
export const ViewImage = styled.View`
  align-self: center;
  margin-top: 65px;
`;
export const ViewTabs = styled.View`
  flex: 1;
  margin-top: 10px;
`;

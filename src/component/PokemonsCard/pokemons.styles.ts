import {Color, ColorsSelector} from './../../utils/colors';
import styled from 'styled-components/native';
import {CardProps} from '../CardType';
type ExistsProps = {
  typeExists: boolean | undefined;
};
export interface CardColorProps extends Omit<CardProps, 'text'> {}
export const Container = styled.TouchableOpacity<CardColorProps>`
  width: 180px;
  height: 140px;
  border-radius: 17px;
  background-color: ${({color}) =>
    ColorsSelector(color as Color) ? ColorsSelector(color as Color) : ''};
  margin-left: 5px;
  margin-right: 5px;
`;
export const ViewText = styled.View`
  margin-top: 20px;
  margin-left: 12px;
`;

export const Content = styled.View``;
export const PokemonName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  margin-left: 5px;
`;
export const ViewTypeText = styled.View``;
export const TypeText = styled.Text`
  color: white;
`;
export const ViewImage = styled.View`
  align-items: flex-end;
  margin-bottom: ${({typeExists}: ExistsProps) => (typeExists ? -147 : -110)}px;
`;
export const PokemonImage = styled.Image`
  width: 90px;
  height: 80px;
  margin-right: 8px;
`;

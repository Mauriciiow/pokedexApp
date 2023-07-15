import styled from 'styled-components/native';
import {CardProps} from '../CardType';
interface CardColorProps extends Omit<CardProps, 'color' | 'onPress'> {}

export const CardContainer = styled.View.attrs({
  shadowOffset: {width: -2, height: 4},
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
})`
  border-radius: 10px;
  background-color: #fff;
  elevation: 5;
`;

export const TypeText = styled.Text<CardColorProps>`
  color: ${({text}: CardColorProps) => (text === 'text' ? 'black' : 'gray')};
  font-size: ${({text}: CardColorProps) => (text === 'text' ? '16' : '16')}px;
`;

export const ViewData = styled.View`
  flex-direction: row;
  padding: 16px;
`;

export const ViewWidth = styled.View`
  margin-right: 70px;
  margin-left: 13px;
`;

export const ViewHeight = styled.View``;

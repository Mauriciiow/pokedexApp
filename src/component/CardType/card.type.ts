import styled from 'styled-components/native';
import {CardProps} from '.';
interface CardColorProps extends Omit<CardProps, 'text'> {}
export const CardContainer = styled.TouchableOpacity<CardColorProps>`
  background-color: ${({color}) => color};
  padding: 20px;
  padding-bottom: 23px;
  padding-top: 23px;
  width: 165px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const TypeText = styled.Text`
  color: #ffff;
  font-weight: bold;
`;

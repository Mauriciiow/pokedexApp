import React from 'react';
import * as Styled from './card.type';
import {Color} from '../../utils/colors';

export interface CardProps {
  text: string;
  color: string | Color;
  onPress?: () => void;
}

export const CardType = ({text, color, onPress}: CardProps) => {
  return (
    <Styled.CardContainer color={color} onPress={onPress}>
      <Styled.TypeText>{text}</Styled.TypeText>
    </Styled.CardContainer>
  );
};

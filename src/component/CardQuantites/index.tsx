import React from 'react';
import * as Styled from './card.styles';

export interface QuantitiesProps {
  weight: number;
  height: number;
}

export const CardQuantities = ({weight, height}: QuantitiesProps) => {
  return (
    <Styled.CardContainer>
      <Styled.ViewData>
        <Styled.ViewWidth>
          <Styled.TypeText text="lenght">Height</Styled.TypeText>
          <Styled.TypeText text="text">
            {height} {height >= 1 ? 'm' : 'cm'}
          </Styled.TypeText>
        </Styled.ViewWidth>
        <Styled.ViewHeight>
          <Styled.TypeText text="lenght">Weight</Styled.TypeText>
          <Styled.TypeText text="text">{weight} kg</Styled.TypeText>
        </Styled.ViewHeight>
      </Styled.ViewData>
    </Styled.CardContainer>
  );
};

import React from 'react';
import {Container, TextType} from './type.text.styles';
type TypeProps = {
  text: string;
  style?: any;
};
export const TypeText = ({text, style}: TypeProps) => {
  return (
    <Container style={style}>
      <TextType>{text}</TextType>
    </Container>
  );
};

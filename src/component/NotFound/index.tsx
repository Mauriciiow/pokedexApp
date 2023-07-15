import React from 'react';
import styled from 'styled-components/native';

const Image = styled.Image``;
const View = styled.View``;

const NotFound = () => {
  return (
    <View>
      <Image source={require('../../assets/images/notfound.png')} />
    </View>
  );
};

export default NotFound;

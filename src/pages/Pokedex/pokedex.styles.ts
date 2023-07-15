import styled from 'styled-components/native';

type ContentProps = {
  size: number;
};

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ViewHeader = styled.SafeAreaView`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 5px;
  color: black;
`;

export const Content = styled.View<ContentProps>`
  flex: 1;
  align-items: ${({size}) => (size === 1 ? 'flex-start' : 'center')};
  margin-left: ${({size}) => (size === 1 ? 5 : 0)}px;
`;
export const PokemonList = styled.FlatList``;
export const NotFound = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

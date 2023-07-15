import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
  align-items: center;
`;

export const Content = styled.View.attrs({})`
  align-items: center;
  width: 90%;
`;
export const DescriptionPoke = styled.Text`
  color: black;
  margin-top: 15px;
  font-size: 16px;
`;

export const CardView = styled.View`
  margin-top: 20px;
  width: 98%;
`;

export const BreedingView = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 18px;
`;

export const TextEspecification = styled.Text`
  margin-right: 30px;
  margin-top: 15px;
`;

export const GenderView = styled.View`
  flex-direction: row;
`;
export const GroupsView = styled.View`
  flex-direction: row;
`;

export const CycleView = styled.View`
  flex-direction: row;
`;

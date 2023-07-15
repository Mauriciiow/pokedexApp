import React from 'react';
import styled from 'styled-components/native';

import {TabsProps} from '../../router/top.tab.route';
import ProgressBar from '../ProgressBar';
const Title = styled.Text`
  font-size: 18px;
`;
const View = styled.View`
  flex: 1;
`;
const ViewContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;
const StatsBar = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ViewTitle = styled.View`
  width: 20%;
`;
const StatsText = styled.Text`
  color: black;
  font-size: 18px;
  margin-right: 15px;
`;
interface Stats extends Omit<TabsProps, 'about' | 'type' | 'loading'> {}
const StatsReturn = ({stats}: Stats) => {
  const statsMap = [
    {
      title: 'HP',
      number: stats?.hp,
    },
    {
      title: 'Attack',
      number: stats?.attack,
    },
    {
      title: 'Defense',
      number: stats?.defense,
    },
    {
      title: 'Speed',
      number: stats?.speed,
    },
  ];
  return (
    <View>
      {statsMap.map(item => {
        return (
          <ViewContainer>
            <ViewTitle>
              <Title>{item.title}</Title>
            </ViewTitle>
            <StatsBar>
              <StatsText>{item.number}</StatsText>
              <ProgressBar
                progress={item.number as number}
                color={item.title}
              />
            </StatsBar>
          </ViewContainer>
        );
      })}
    </View>
  );
};

export default StatsReturn;

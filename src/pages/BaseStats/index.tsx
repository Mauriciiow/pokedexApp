import React from 'react';
import * as B from './stats.styles';
import {TabsProps} from '../../router/top.tab.route';
import {Loading} from '../../component/Loading';
import StatsReturn from '../../component/StatsReturn';

export const BaseStats = ({stats, loading}: TabsProps) => {
  return (
    <B.Container>
      {loading ? (
        <B.Content>
          <B.StatsView>
            <StatsReturn stats={stats} />
          </B.StatsView>
        </B.Content>
      ) : (
        <Loading />
      )}
    </B.Container>
  );
};

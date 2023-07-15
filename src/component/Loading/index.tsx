import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Color, ColorsSelector} from '../../utils/colors';
type LoadingProps = {
  type?: Color | undefined;
};
export const Loading = ({type}: LoadingProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <ActivityIndicator size="large" color={ColorsSelector(type)} />
    </View>
  );
};

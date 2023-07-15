import React, {useRef, useState, type PropsWithChildren} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

type ProgressProps = {
  progress: number;
  color: string;
};
const background = {
  HP: '#ff9e53',
  Attack: '#5fba55',
  Defense: '#ff9e53',
  Speed: '#5fba55',
};

const ProgressBar = ({progress, color}: ProgressProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.absolute,
            {backgroundColor: background[color], width: `${progress}%`},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  progressBar: {
    width: 250,
    height: 5,
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    borderRadius: 5,
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 5,
  },
});

export default ProgressBar;

import React from 'react';
import {Button, Container} from './header.styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  iconLeft?: {
    name: string;
    size: number;
    color: string;
    onPress?: () => void;
  };
  iconRight?: {
    name: string;
    size: number;
    color?: string;
    onPress: () => void;
  };
  colorLeft?: string;
};

export const Header = ({
  iconLeft = {
    name: 'arrow-left',
    size: 25,
    color: '#000',
  },
  iconRight,
  colorLeft,
}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button
        onPress={() =>
          iconLeft.onPress ? iconLeft.onPress() : navigation.goBack()
        }>
        <Icon name={iconLeft.name} size={iconLeft.size} color={colorLeft} />
      </Button>

      <Button onPress={() => iconRight?.onPress()}>
        <Icon
          name={iconRight?.name as string}
          size={iconRight?.size}
          color={iconRight?.color || '#000'}
        />
      </Button>
    </Container>
  );
};

import * as React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Home} from '../pages/Home/Index';
import {Pokedex} from '../pages/Pokedex';
import {RouteProp} from '@react-navigation/native';
import {InfoPokemon} from '../pages/InfoPokemon';
import {About} from '../pages/About';
import {BaseStats} from '../pages/BaseStats';
import {MyTabs} from './top.tab.route';

export type NativeStackParamList = {
  Home: {};
  Pokedex: {};
  Info: {};
};

export type StackScreenNavigationProp =
  NativeStackNavigationProp<NativeStackParamList>;
export type StackProps = {
  navigation?: StackScreenNavigationProp;
  route?: RouteProp<
    {params: {id: number; type1: string; type2: string; name: string}},
    'params'
  >;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

export function StackRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Info"
        component={InfoPokemon}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

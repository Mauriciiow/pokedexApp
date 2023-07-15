import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoute} from './router/stack.route';
import {MyTabs} from './router/top.tab.route';
import {InfoPokemon} from './pages/InfoPokemon';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackRoute />
      </NavigationContainer>
    </>
  );
}

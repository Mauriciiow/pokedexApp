import React, {useState} from 'react';
import {Container, Header, TextHeader, ViewCards} from './home.styles';
import {CardType} from '../../component/CardType';
import {SearchBar} from '@rneui/themed';
import {StackProps} from '../../router/stack.route';
import StatsReturn from '../../component/StatsReturn';

export const Home = ({navigation}: StackProps) => {
  const [inputText, setText] = useState('');
  const updateSearch = (search: string) => {
    setText(search);
  };

  return (
    <Container>
      <Header>
        <TextHeader>What Pokemon </TextHeader>
        <TextHeader>are you looking for?</TextHeader>
      </Header>
      <SearchBar
        platform="ios"
        placeholder="Search Pokemon, Move, Ability etc"
        containerStyle={{marginHorizontal: 12, marginBottom: 15}}
        inputContainerStyle={{borderRadius: 100, backgroundColor: '#F3F3F3'}}
        inputStyle={{fontSize: 14}}
        leftIconContainerStyle={{marginLeft: 15}}
        onChangeText={updateSearch}
        value={inputText}
      />

      <ViewCards>
        <CardType
          color="#50bfa4"
          text="Pokedex"
          onPress={() => navigation?.navigate('Pokedex', {})}
        />
        <CardType color="#f47464" text="Moves" />
      </ViewCards>
      <ViewCards>
        <CardType color="#59a9f6" text="Locations" />
        <CardType color="#fecd4a" text="Items" />
      </ViewCards>
      <ViewCards>
        <CardType color="#7b5489" text="Locations" />
        <CardType color="#ad736d" text="Type Charts" />
      </ViewCards>
    </Container>
  );
};

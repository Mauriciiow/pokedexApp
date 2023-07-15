/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Container,
  Title,
  ViewHeader,
  Content,
  PokemonList,
} from './pokedex.styles';
import {Header} from '../../component/Header';
import {PokemonsCard} from '../../component/PokemonsCard';
import {FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import {getListForGen} from '../../hooks/useGetListForGen';
import {FloatingAction} from 'react-native-floating-action';
// import {FAB} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {Loading} from '../../component/Loading';
import Icon from 'react-native-vector-icons/Feather';
import {SearchBar} from '@rneui/themed';
import {getPokemon} from '../../hooks/useGetPokemon';
import NotFound from '../../component/NotFound';
export type ListProps = {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
};

type Teste = {
  item: ListProps[] | undefined;
};

export const Pokedex = () => {
  const [list, setLists] = useState<ListProps[]>();
  const [filteredList, setFiltered] = useState<ListProps[]>();
  const [gen, setGen] = useState(1);
  const [open, setOpen] = useState<boolean>();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputText, setText] = useState('');
  const updateSearch = (search: string) => {
    setText(search);
  };

  const defaultListGen = [
    {title: 'Gen 1', value: 1},
    {title: 'Gen 2', value: 2},
    {title: 'Gen 3', value: 3},
    {title: 'Gen 4', value: 4},
    {title: 'Gen 5', value: 5},
    {title: 'Gen 6', value: 6},
    {title: 'Gen 7', value: 7},
    {title: 'Gen 8', value: 8},
    {title: 'Gen 9', value: 9},
  ];

  const actions = [
    {
      text: 'Select Gen',
      color: '#7076db',
      name: 'bt_gen',
      icon: <Icon name="chevron-up" size={20} color="#fff" />,
      textStyle: {fontSize: 16, fontWeight: 'bold'},
      textColor: '#000',
      position: 2,
    },
  ];

  useEffect(() => {
    setLoading(true);
    getListForGen(gen, setLists, setLoading, setFiltered);
  }, [gen]);

  const searchFilter = (text: string) => {
    if (text) {
      const newData = list?.filter(item => {
        if (item.pokemon_species.name) {
          const itemData = item.pokemon_species.name.toUpperCase();
          const textData = text.toUpperCase().trim();

          return itemData.indexOf(textData) > -1;
        }
      });

      setFiltered(newData);
    } else {
      setFiltered(list);
    }
    setText(text);
  };

  return (
    <Container>
      <ViewHeader>
        <Header
          iconRight={{
            name: 'menu',
            size: 25,
            onPress: () => console.warn('aaa'),
          }}
        />
        <Title>Pokedex</Title>
      </ViewHeader>
      <SearchBar
        platform="ios"
        placeholder="Search Pokemon"
        containerStyle={{marginHorizontal: 12, marginBottom: 15}}
        inputContainerStyle={{borderRadius: 100, backgroundColor: '#F3F3F3'}}
        inputStyle={{fontSize: 14}}
        leftIconContainerStyle={{marginLeft: 15}}
        onChangeText={searchFilter}
        value={inputText}
      />
      <Content size={filteredList?.length as number}>
        {filteredList?.length === 0 && (
          <View style={{alignItems: 'center', width: '100%'}}>
            <NotFound />
          </View>
        )}
        {!loading ? (
          <FlatList
            data={filteredList}
            keyExtractor={(item: ListProps) => item.entry_number.toString()}
            renderItem={({item}) => <PokemonsCard data={item as ListProps} />}
            ItemSeparatorComponent={() => (
              <View style={{flex: 1, height: 10}} />
            )}
            numColumns={2}
          />
        ) : (
          <Loading />
        )}
      </Content>
      {pickerOpen ? (
        <View>
          {Platform.OS === 'ios' ? (
            <TouchableOpacity
              onPress={() => setPickerOpen(false)}
              style={{alignSelf: 'flex-end', marginRight: 17, marginTop: 8}}>
              <Text style={{color: '#464edc', fontSize: 16}}>Done</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setPickerOpen(false)}
              style={{alignSelf: 'flex-start', marginLeft: 15, marginTop: 8}}>
              <Text style={{color: '#464edc', fontSize: 16}}>Done</Text>
            </TouchableOpacity>
          )}
          <Picker
            selectedValue={gen}
            onValueChange={itemValue => {
              setGen(itemValue);
              setLoading(true);
              // setPickerOpen(false);
            }}>
            <Picker.Item label={'Select Gen'} enabled={false} />
            {defaultListGen.map(item => {
              return (
                <Picker.Item
                  label={item.title}
                  value={item.value}
                  key={item.value}
                />
              );
            })}
          </Picker>
        </View>
      ) : (
        ''
      )}
      <FloatingAction
        color="#7076db"
        actions={actions}
        onPressItem={name => {
          setPickerOpen(true);
        }}
      />
    </Container>
  );
};

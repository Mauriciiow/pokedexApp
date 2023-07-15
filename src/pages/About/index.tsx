import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Text} from 'react-native';

import {TabsProps} from '../../router/top.tab.route';
import * as A from './about.styles';
import {CardQuantities} from '../../component/CardQuantites';
import {firstLetterUpper} from '../../utils/upperCaseFirstLetter';
import {Color, ColorsSelector} from '../../utils/colors';
import {Loading} from '../../component/Loading';

export const About = ({about, loading, type}: TabsProps) => {
  return (
    <A.Container>
      {loading ? (
        <A.Content>
          <A.DescriptionPoke>{about?.description}</A.DescriptionPoke>
          <A.CardView>
            <CardQuantities
              height={about?.height as number}
              weight={about?.weight as number}
            />
          </A.CardView>
          <A.BreedingView>
            <A.Title>Breeding</A.Title>
            <A.GenderView>
              <A.TextEspecification>Gender</A.TextEspecification>
              <A.TextEspecification>Gender</A.TextEspecification>
              <A.TextEspecification>Gender</A.TextEspecification>
            </A.GenderView>
            <A.GroupsView>
              <A.TextEspecification>Egg Groups</A.TextEspecification>
              {about?.eggGroup.map(items => {
                return (
                  <A.TextEspecification>
                    {firstLetterUpper(items.name)}
                  </A.TextEspecification>
                );
              })}
            </A.GroupsView>
            {/* <A.CycleView>
            <A.TextEspecification>Gender</A.TextEspecification>
            <A.TextEspecification>Gender</A.TextEspecification>
          </A.CycleView> */}
          </A.BreedingView>
        </A.Content>
      ) : (
        <Loading type={type as Color} />
      )}
    </A.Container>
  );
};

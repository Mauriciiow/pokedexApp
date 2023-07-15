import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {About} from '../pages/About';
import {BaseStats} from '../pages/BaseStats';
import {StackRoute} from './stack.route';
import {QuantitiesProps} from '../component/CardQuantites';
import {AboutProps, StatsProps} from '../pages/InfoPokemon';
export interface TabsProps {
  about?: AboutProps;
  loading?: boolean;
  stats?: StatsProps;
  type?: string;
}
const Tab = createMaterialTopTabNavigator();

export function MyTabs({stats, about, loading, type}: TabsProps) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="About"
        // component={() => <About description={description} />}
        children={() => <About about={about} loading={loading} type={type} />}
        options={{tabBarLabel: 'About'}}
      />
      <Tab.Screen
        name="BaseStats"
        children={() => (
          <BaseStats stats={stats} loading={loading} type={type} />
        )}
      />
      {/* <Tab.Screen name="Evolution" component={BaseStats} />
      <Tab.Screen name="Moves" component={BaseStats} /> */}
    </Tab.Navigator>
  );
}

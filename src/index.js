import AddCity from './AddCity';
import Cities from './Cities';
import City from './City';

import { colors } from './theme';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

const CitiesNav = createStackNavigator({
  Cities: { screen: Cities},
  City: { screen: City }
}, {
  navigationOptions: {
    title: 'Cities',
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: '#fff'
  }
});

const TabsNav = createBottomTabNavigator({
  Cities: { screen: CitiesNav },
  AddCity: { screen: AddCity }
});

const AppContainer = createAppContainer(TabsNav);

export default AppContainer;
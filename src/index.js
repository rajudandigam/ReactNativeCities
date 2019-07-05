import AddCity from './AddCity';
import Cities from './Cities';
import City from './City';

import colors from './theme';

import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

const CitiesNav = createStackNavigator({
  Cities: { screen: Cities},
  City: { screen: City }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: '#fff'
  }
});

const Tabs = createBottomTabNavigator({
  Cities: { screen: CitiesNav },
  AddCity: { screen: AddCity }
});

export default Tabs;
import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './screens/Welcome'
import Home from './screens/Home';

const HomeStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },

},{initialRouteName: 'Welcome'})


const App = createSwitchNavigator({
  App: {
    screen: HomeStack
  }
});

export default createAppContainer(App);
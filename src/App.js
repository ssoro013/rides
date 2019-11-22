import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './components/screens/LoadingScreen';

const AppNavigator = createStackNavigator(
  {
  Loading: {screen: LoadingScreen}
  },
  {
    initialRouteName: 'Loading'
  }
)

export default createAppContainer(AppNavigator);
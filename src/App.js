import React, { Component } from 'react';
// import { Icon } from 'react-native-elements'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoadingScreen from './components/screens/LoadingScreen';

import WelcomeScreen from './components/screens/WelcomeScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import SignInScreen from './components/screens/SignInScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';

//Application Navigator
// const AppStackNavigator = createStackNavigator({
//   AppTabNavigator: {
//     screen: AppTabNavigator
//   }
// })

// Application Drawer
// const AppDrawerNavigator = createDrawerNavigator({
//   Tabs: AppStackNavigator,
//   Home: HomeScreen,
//   Profile: ProfileScreen,
//   Settings: SettingsScreen
// })

// Authentication Navigator
const AuthNavigator = createStackNavigator({
  //Welcome Screen
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to Ride's`,
      headerBackTitle: 'Back'
    }),
  },

  //Signup Screen
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`
    }),
  },

  //SignIn Screen
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log into your account`
    }),
  },

  //Forgot Password Screen
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: () => ({
      title: `Reset your password`
    }),
  },

});


const Navigator = createSwitchNavigator(
  {Loading: LoadingScreen,
  Authentication: AuthNavigator,
  // Application: AppDrawerNavigator
  },
  {initialRouteName: "Loading"}
);

export default createAppContainer(Navigator);

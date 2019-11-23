import React, {Component} from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './components/screens/LoadingScreen';

import WelcomeScreen from './components/screens/WelcomeScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import SignInScreen from './components/screens/SignInScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';

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

const AppNavigator = createSwitchNavigator(
  {Loading: LoadingScreen,
  Authentication: AuthNavigator
  },
  {initialRouteName: "Authentication"}
);

export default createAppContainer(AppNavigator);

import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import { TouchableOpacity } from 'react-native-gesture-handler';

import LoadingScreen from './components/screens/LoadingScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import SignInScreen from './components/screens/SignInScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import HomeScreen from './components/screens/HomeScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import ProfileScreen from './components/screens/ProfileScreen';

//Application Tab Navigator
const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

//Application Navigator
const AppStackNavigator = createStackNavigator({
  Header: {
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name="ios-menu" size={25}/>
          </View>
        </TouchableOpacity>
      )
    })
  }
});

// Application Drawer
const AppDrawerNavigator = createDrawerNavigator({
  Tabs: AppStackNavigator,
  Home: HomeScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen
});

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
  Application: AppDrawerNavigator
  },
  {initialRouteName: "Loading"}
);

export default createAppContainer(Navigator);
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../common/TabBarIcon';
import HomeScreen from '../home/HomeScreen';
import LoginScreen from '../auth/LoginScreen';
import SignupScreen from '../auth/SignupScreen';
import AnonymousScreen from '../auth/AnonymousScreen';
import SettinsNavigator from '../settings/SettinsNavigator';
import EventNavigator from '../event/EventNavigator';
import EventConversationScreen from '../event/EventConversationScreen';
import EventPollScreen from '../event/EventPollScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    AnonymousAccess: AnonymousScreen,
    EventNavigator: {
      screen: EventNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Responses: EventConversationScreen,
    Poll: EventPollScreen,
  },
  {
    initialRouteName: 'Signup',
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettinsNavigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  config,
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SettingsStack,
  },
  {
    tabBarOptions: { showLabel: false },
    initialRouteName: 'HomeStack',
  },
);

tabNavigator.path = '';

export default tabNavigator;

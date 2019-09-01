import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';

// importing all screens here
import Login from 'App/src/screens/auth/Login';
import FirstTimeInstruction from 'App/src/screens/FirstTimeInstructions';

const LoadingStack = createStackNavigator({
  FIRSTTIMELOGIN: FirstTimeInstruction,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

const AuthStack = createStackNavigator({
  LOGIN: Login,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

const createRootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      LoadingStack: LoadingStack,
      AuthStack: AuthStack,
    },
    {
      initialRouteName: 'LoadingStack',
    },
  ),
);

export default createRootNavigator;

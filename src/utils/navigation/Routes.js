import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

// importing all screens here
import Login from 'App/src/screens/auth/Login';
import Onboarding from 'App/src/screens/Onboarding';
import Home from 'App/src/screens/home/Home';
import Drawer from '../../screens/Drawer';

const LoadingStack = createStackNavigator({
  ONBOARDING: Onboarding,
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

const LoggedInStack = createStackNavigator({
  HOME: Home,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

const DrawerStack = createDrawerNavigator({
  HOME: {
    screen: Home,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
},
{
  contentComponent: props => <Drawer {...props} />,
});

const createRootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      LoadingStack: LoadingStack,
      AuthStack: AuthStack,
      DrawerStack: DrawerStack,
      LoggedInStack: LoggedInStack,
    },
    {
      initialRouteName: 'LoadingStack',
    },
  ),
);

export default createRootNavigator;

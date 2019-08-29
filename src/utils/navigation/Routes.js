import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';

// importing all screens here
import Login from '../../screens/auth/Login';

const AuthStack = createStackNavigator({
    LOGIN: Login,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
}
);

const createRootNavigator = createAppContainer(
  createSwitchNavigator(
    {
        AuthStack: AuthStack,
    },
    {
      initialRouteName: 'AuthStack'
    }
  )
);

export default createRootNavigator;

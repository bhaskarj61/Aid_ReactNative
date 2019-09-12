import React from 'react';
import {
  Easing,
  Animated,
} from 'react-native';
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

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {  
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return { transform: [{ translateX }] };
    },
  };
};

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
    transitionConfig: transitionConfig,
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

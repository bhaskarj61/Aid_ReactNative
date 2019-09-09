import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import store from 'App/src/utils/redux/store';
import createRootNavigator from 'App/src/utils/navigation/Routes';
import THEME from 'App/src/utils/constants/Theme';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: THEME.COLORS.THEME_COLOR,
    accent: THEME.COLORS.WHITE,
  },
  fonts: {
    regular: 'ProximaNova-Regular',
    semiBold: 'ProximaNova-Semibold',
    light: 'ProximaNova-Light',
    bold: 'ProximaNova-Bold',
  },
};

const App = () => { 
  const Layout = createRootNavigator;
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor={THEME.COLORS.THEME_COLOR} barStyle="light-content" />
        <Layout />
      </PaperProvider>
    </Provider>
  );
};

export default App;

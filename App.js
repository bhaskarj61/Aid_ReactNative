/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'mobx-react';
import createRootNavigator from './src/utils/navigation/Routes';
import Store from './src/utils/store/Store';

const App = () => {
  const Layout=createRootNavigator
  return (
    <Provider {...Store}>
      <View style={styles.container}>
        <Layout/>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;

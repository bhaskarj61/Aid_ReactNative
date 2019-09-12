import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Appbar,
} from 'react-native-paper';
import THEME from 'App/src/utils/constants/Theme';

const Home = (props) => {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={openDrawer}
        />
        <Appbar.Content
          title="Home"
        />
        <Appbar.Action
          icon="notifications"
          onPress={props.navigation.goBack()}
        />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

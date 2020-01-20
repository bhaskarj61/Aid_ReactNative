import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Appbar,
} from 'react-native-paper';

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
          onPress={() => alert('Coming Soon..')}
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

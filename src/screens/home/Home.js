import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from 'App/src/components/Header';
import THEME from 'App/src/utils/constants/Theme';

const Home = (props) => {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon="ios-menu"
        onPressLeftImage={() => openDrawer()}
        title="Home"
        rightIcon="ios-notifications-outline"
        onPressRightImage={() => alert('Coming Soon..')}
        navigation={props.navigation}
      />
      <Text style={{textAlign: 'center', width: '100%', fontSize: 22}} onPress={()=>props.navigation.navigate('LOGIN')}> Navigate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;

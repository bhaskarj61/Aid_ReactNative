import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { observer, inject } from 'mobx-react';

const Login=inject('auth')(observer((props) => {
  return (
    <View style={styles.container}>
      <Text onPress={()=>props.auth.init()}>Login</Text>
    </View>
  );
}));

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default Login;

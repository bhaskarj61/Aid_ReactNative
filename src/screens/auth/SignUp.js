import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'App/src/utils/redux/actions/auth';
import {
  TextInput,
  Caption,
  Button,
  Appbar,
} from 'react-native-paper';
import THEME from 'App/src/utils/constants/Theme';

const instructions = 'You are just a step away from connecting with people';
const placeholderPhone = 'Please Enter Your Mobile Number';
const placeholderPassword = 'Please Enter Your Password';

const SignUp = (props) => {
  const [phone, setPhone] = useState(0);

  const onPressLogin = () => {
    props.navigation.navigate('HOME');
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content
          title="Login"
        />
      </Appbar.Header>

      <View style={styles.container}>
        <Caption style={styles.instructions}>{instructions}</Caption>

        <TextInput
          label={placeholderPhone}
          style={[styles.textInput, { marginBottom: 10 }]}
          keyboardType="numeric"
          mode="flat"
          theme={{ colors: { text: THEME.COLORS.BLACK, background: '#ffffff' } }}
          mask="+[00] [000] [000] [000]"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          label={placeholderPassword}
          style={styles.textInput}
          keyboardType="numeric"
          mode="flat"
          theme={{ colors: { text: THEME.COLORS.BLACK, background: '#ffffff' } }}
          mask="+[00] [000] [000] [000]"
          value={phone}
          onChangeText={text => setPhone(text)}
        />

        <Button
          mode="contained"
          onPress={() => onPressLogin()}
          style={styles.button}
        >
          <Text style={{ color: 'white', fontSize: 24 }}> Login</Text>
        </Button>
        <Caption style={{ textAlign: 'right', marginRight: 10, color: THEME.COLORS.THEME_COLOR }}>Forgot Password ?</Caption>
      </View>
      <View style={styles.bottomContainer}>
        <Caption>Don't have an account ?<Caption style={{color: THEME.COLORS.THEME_COLOR}}> Sign Up ?</Caption></Caption>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  name: 'undefined',
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: THEME.COLORS.WHITE,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 16,
    color: THEME.COLORS.THEME_COLOR,
    marginBottom: 10,
  },
  textInput: {
    marginHorizontal: 10,
    backgroundColor: THEME.COLORS.WHITE,
  },
  button: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  bottomContainer: {
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

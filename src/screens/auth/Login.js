import React, { useState, useEffect } from 'react';
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
} from 'react-native-paper';
import THEME from 'App/src/utils/constants/Theme';
import STRINGS from 'App/src/utils/constants/Strings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const checkValidations = () => {
    if(emma)
  }

  const onPressLogin = () => {
    if(checkValidations) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => props.navigation.navigate('HOME'))
      // .then((res) => console.log(res))
        .catch(error => alert(error));
    }
  };

  const onPressSignUp = () => {
    props.navigation.navigate('SIGNUP');
  };

  const onPressForgotPassword = () => {
    props.navigation.navigate('FORGOT_PASSWORD');
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ height: '50%', backgroundColor: THEME.COLORS.THEME_COLOR, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="ios-medkit" size={100} color={THEME.COLORS.WHITE} />
        </View>
        <Caption style={styles.instructions}>{STRINGS.INSTRUCTIONS.LOGIN_INSTRUCTIONS}</Caption>

        <TextInput
          label={STRINGS.PLACEHOLDERS.ENTER_EMAIL}
          style={[styles.textInput, { marginBottom: 10 }]}
          keyboardType="email-address"
          mode="flat"
          theme={{ colors: { text: THEME.COLORS.BLACK, background: '#ffffff' } }}
          mask="+[00] [000] [000] [000]"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label={STRINGS.PLACEHOLDERS.ENTER_PASSWORD}
          style={styles.textInput}
          secureTextEntry
          keyboardType="default"
          mode="flat"
          theme={{ colors: { text: THEME.COLORS.BLACK, background: '#ffffff' } }}
          mask="+[00] [000] [000] [000]"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button
          mode="contained"
          onPress={() => onPressLogin()}
          style={styles.button}
        >
          <Text
            style={{ color: 'white', fontSize: 24 }}
          >
            {STRINGS.BUTTONS.LOGIN}
          </Text>
        </Button>
        <Caption
          style={styles.forgotPasswordText}
          onPress={() => onPressForgotPassword()}
        >
          {STRINGS.BUTTONS.FORGOT_PASSWORD}
        </Caption>
      </View>
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => onPressSignUp()}
      >
        <Caption>
          Don't have an account ?
          <Caption
            style={{ color: THEME.COLORS.THEME_COLOR }}
          >
            {' '}
            {STRINGS.BUTTONS.SIGNUP}
            {'?'}
          </Caption>
        </Caption>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
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
  forgotPasswordText: {
    textAlign: 'right',
    marginRight: 10,
    color: THEME.COLORS.THEME_COLOR,
  },
  button: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  bottomContainer: {
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'App/src/utils/redux/actions/auth';
import {
  TextInput,
  Appbar,
  Button,
} from 'react-native-paper';
import THEME from 'App/src/utils/constants/Theme';
import STRINGS from 'App/src/utils/constants/Strings';
import firebase from 'react-native-firebase';

const inputFields = [
  {
    placeholder: STRINGS.PLACEHOLDERS.ENTER_FIRST_NAME,
    key: 'firstName',
  },
  {
    placeholder: STRINGS.PLACEHOLDERS.ENTER_LAST_NAME,
    key: 'lastName',
  },
  {
    placeholder: STRINGS.PLACEHOLDERS.ENTER_EMAIL,
    key: 'email',
  },
  {
    placeholder: STRINGS.PLACEHOLDERS.ENTER_PASSWORD,
    key: 'password',
  },
  {
    placeholder: STRINGS.PLACEHOLDERS.CONFIRM_PASSWORD,
    key: 'confirmPassword',
  },
];

const SignUp = (props) => {
  const [value, setValue] = useState({});

  const goBack = () => {
    props.navigation.goBack();
  };

  const onPressSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .then((user) => props.navigation.navigate('HOME'))
      .catch(error => alert(error));
  };

  const renderSignUpFields = (placeholder, key) => {
    return (
      <TextInput
        label={placeholder}
        style={[styles.textInput, { marginBottom: 10 }]}
        keyboardType={key === 'phone' ? 'numeric' : 'default'}
        mode="flat"
        theme={{ colors: { text: THEME.COLORS.BLACK, background: '#ffffff' } }}
        mask="+[00] [000] [000] [000]"
        secureTextEntry={!!(key === 'password' || key === 'confirmPassword') || false}
        value={value[key]}
        onChangeText={(text) => {
          setValue({
            ...value,
            [key]: text,
          });
        }}
      />
    );
  };

  const renderButton = () => {
    return (
      <Button
        mode="contained"
        onPress={() => onPressSignUp()}
        style={styles.button}
      >
        <Text
          style={{ color: 'white', fontSize: 24 }}
        >
          {STRINGS.BUTTONS.SIGNUP}
        </Text>
      </Button>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={STRINGS.HEADERS.SIGNUP}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={inputFields}
          renderItem={({ item }) => renderSignUpFields(item.placeholder, item.key)}
          keyExtractor={item => item.id}
          extraData={value}
          ListFooterComponent={() => renderButton()}
        />
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
  textInput: {
    marginHorizontal: 10,
    backgroundColor: THEME.COLORS.WHITE,
  },
  button: {
    marginHorizontal: 10,
    marginTop: 10,
    marginVertical: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

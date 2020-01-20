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
  Button,
  Appbar,
} from 'react-native-paper';
import THEME from 'App/src/utils/constants/Theme';
import STRINGS from 'App/src/utils/constants/Strings';

const ResetPassword = (props) => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const goBack = () => {
    props.navigation.goBack();
  };

  const onPressReset = () => {
    props.navigation.navigate('LOGIN');
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={STRINGS.HEADERS.RESET_PASSWORD}
        />
      </Appbar.Header>

      <View style={styles.container}>
        <TextInput
          label={STRINGS.PLACEHOLDERS.ENTER_PASSWORD}
          style={[styles.textInput, { marginBottom: 10 }]}
          mode="flat"
          theme={{ colors: { text: THEME.COLORS.BLACK, background: '#ffffff' } }}
          mask="+[00] [000] [000] [000]"
          value={confirmPassword}
          secureTextEntry
          onChangeText={text => setConfirmPassword(text)}
        />
        <TextInput
          label={STRINGS.PLACEHOLDERS.CONFIRM_PASSWORD}
          style={styles.textInput}
          mode="flat"
          theme={{ colors: { text: THEME.COLORS.BLACK, background: '#ffffff' } }}
          mask="+[00] [000] [000] [000]"
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />

        <Button
          mode="contained"
          onPress={() => onPressReset()}
          style={styles.button}
        >
          <Text style={{ color: 'white', fontSize: 24 }}>{STRINGS.BUTTONS.RESET_PASSWORD}</Text>
        </Button>
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
    backgroundColor: THEME.COLORS.WHITE,
  },
  textInput: {
    marginHorizontal: 10,
    backgroundColor: THEME.COLORS.WHITE,
  },
  button: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

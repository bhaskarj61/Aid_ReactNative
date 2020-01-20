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
  Appbar,
  Button,
} from 'react-native-paper';
import THEME from 'App/src/utils/constants/Theme';
import STRINGS from 'App/src/utils/constants/Strings';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState();

  const goBack = () => {
    props.navigation.goBack();
  };

  const onPressReset = () => {
    props.navigation.navigate('RESET_PASSWORD');
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={STRINGS.HEADERS.FORGOT_PASSWORD}
        />
      </Appbar.Header>
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
      <Button
        mode="contained"
        onPress={() => onPressReset()}
        style={styles.button}
      >
        <Text
          style={{ color: THEME.COLORS.WHITE, fontSize: 24 }}
        >
          {STRINGS.BUTTONS.RESET_PASSWORD}
        </Text>
      </Button>
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
  textInput: {
    marginHorizontal: 10,
    backgroundColor: THEME.COLORS.WHITE,
  },
  button: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 0,
    marginVertical: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

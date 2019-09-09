import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'App/src/utils/redux/actions/auth';
import { TextInput, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import IMAGES from 'App/src/utils//constants/Images';
import THEME from 'App/src/utils/constants/Theme';

const { height, width } = Dimensions.get('window');
const instructions = 'You are just a step away from connecting with people';
const placeholder = 'Please Enter Your Mobile Number';

const Login = (props) => {
  const [phone, setPhone] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('HOME')}
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <Icon
          name="ios-arrow-forward"
          size={40}
          color={THEME.COLORS.WHITE}
        />
      </TouchableOpacity>

      <Caption style={styles.instructions}>{instructions}</Caption>
      <TextInput
        label={placeholder}
        style={styles.textInput}
        keyboardType="numeric"
        mode="flat"
        theme={{ colors: { text: THEME.COLORS.BLACK } }}
        mask="+[00] [000] [000] [000]"
        value={phone}
        onChangeText={text => setPhone(text)}
      />
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
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.THEME_COLOR,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 20,
    color: THEME.COLORS.WHITE,
    marginBottom: 10,
  },
  textInput: {
    marginHorizontal: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {login} from 'App/src/utils/redux/actions/auth';

const Login = (props) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text
        // onPress={() => setCount(count + 1)}
        onPress={() =>
          props.login()
        }
        style={styles.text}
      >
       Increase Count
      </Text>
      <Text
        style={styles.text}
      >
        {/* {count} */}
        name is
        { props.name }
      </Text>
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
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

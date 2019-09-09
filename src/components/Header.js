import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Title } from 'react-native-paper';
import THEME from 'App/src/utils/constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

const Header = (props) => {
  const {
    leftImage,
    leftIcon,
    onPressLeftImage = () => {},
    title,
    rightImage,
    rightIcon,
    onPressRightImage = () => {},
  } = props;

  const _renderLeftContainer = () => {
    return (
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() => onPressLeftImage()}
        >
          {
            leftImage ? (
              <Image
                source={leftImage}
                style={styles.image}
              />
            )
              : (
                <Icon
                  name={leftIcon}
                  size={30}
                  color={THEME.COLORS.WHITE}
                />
              )
          }
        </TouchableOpacity>
      </View>
    );
  };

  const _renderCenterContainer = () => {
    return (
      <View style={styles.centerContainer}>
        <Title style={styles.title }>{title}</Title>
      </View>
    );
  };

  const _renderRightContainer = () => {
    return (
      <View style={styles.rightContainer}>
        <TouchableOpacity
          onPress={() => onPressRightImage()}
        >
          {
            rightImage ? (
              <Image
                source={rightImage}
                style={styles.image}
              />
            )
              : (
                <Icon
                  name={rightIcon}
                  size={30}
                  color={THEME.COLORS.WHITE}
                />
              )
          }
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {leftImage || leftIcon ? _renderLeftContainer() : <View />}
      {title ? _renderCenterContainer() : <View />}
      {rightImage || rightIcon ? _renderRightContainer() : <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: width,
    flex: 1,
    backgroundColor: THEME.COLORS.THEME_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
  },
  leftContainer: {
    height: 44,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    height: 44,
    flex: 0.8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    height: 44,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD,
  },
  image: {
    height: 35,
    width: 35,
  },
});

export default Header;

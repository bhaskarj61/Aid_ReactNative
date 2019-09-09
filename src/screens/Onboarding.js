import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Caption } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import IMAGES from 'App/src/utils//constants/Images';
import THEME from 'App/src/utils/constants/Theme';

const { height, width } = Dimensions.get('window');
const data = [
  {
    instruction: 'Help people nearby and post for help in need.',
    image: IMAGES.BACKGROUND.SAMPLE1,
  },
  {
    instruction: 'Add friends and get notification when they need help.',
    image: IMAGES.BACKGROUND.SAMPLE2,
  },
  {
    instruction: 'We have a responsibility to help those around us and help others in need.',
    image: IMAGES.BACKGROUND.SAMPLE3,
  },
];

const FirstTimeInstruction = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.instructionTextContainer}>
          <Caption style={[styles.text, { fontSize: 18 }]}>{item.instruction}</Caption>
        </View>
        <View style={styles.instructionImageContainer}>
          <Image
            source={item.image}
            style={styles.descriptionImage}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Carousel
        data={data}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveIndex(index)}
        sliderWidth={width}
        itemWidth={width}
        firstItem={activeIndex}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        {pagination()}
      </View>
      <TouchableOpacity
        onPress={() => (activeIndex !== data.length - 1 ? setActiveIndex(activeIndex + 1) : props.navigation.navigate('LOGIN'))}
        style={styles.button}
      >
        <Text style={styles.text}>{activeIndex === data.length - 1 ? 'Done' : 'Next'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instructionTextContainer: {
    flex: 0.3,
    backgroundColor: THEME.COLORS.THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  instructionImageContainer: {
    flex: 0.7,
    backgroundColor: THEME.COLORS.THEME_COLOR,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  descriptionImage: {
    width: 350,
    height: 350,
    borderRadius: 175,
  },
  button: {
    width: 70,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: THEME.COLORS.WHITE,
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: 'white',
  },
});

export default FirstTimeInstruction;

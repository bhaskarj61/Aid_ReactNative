import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data=[
  { title: 'title' },
  { title: 'title' },
];
// const sampleImage = require('App/src/assets/images/sample-image');
const sampleImage = require('../assets/images/sample-image.jpg');
const { height, width } = Dimensions.get('window');

const pagination = () => {
  return (
    <Pagination
      dotsLength={2}
      activeDotIndex={0}
      containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.92)'
      }}
      inactiveDotStyle={{
        // Define styles for inactive dots here
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
}

const _renderItem = ({ item, index }) => {
  return (
    <View style={{backgroundColor: 'red' }}>
      {/* <Text>{ item.title }</Text> */}
      <Image
        source={sampleImage}
        style={styles.descriptionImage}
      />
    </View>
  );
};

const FirstTimeInstruction = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
      />
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        {pagination()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionImage: {
    width: width,
    height: height,
  }
});

export default FirstTimeInstruction;

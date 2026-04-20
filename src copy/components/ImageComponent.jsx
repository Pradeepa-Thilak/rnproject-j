import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const ImageComponents = ({ uri, height }) => {
  return (
    <Image
      source={{ uri: uri }}
      style={[styles.image, { height: height }, { width: width }]}
      resizeMode="cover"
    />
  );
};
const styles = StyleSheet.create({
  image: {
    width: width,
  },
});
export default ImageComponents;

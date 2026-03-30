import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HeroBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/1_Jun25_Brand_EOSS_Mobile_Landing_Page_Banner_3771_1750937990193.jpg?w=360&auto=format',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default HeroBanner;
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import fonts from '../../../../assests/fonts';
export default function Giftcards() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_41_12x_19_1720703257928_3771_1730194007068.png',
        }}
        style={styles.ImgBackground}
      >
        <View style={styles.maincon}>
          <Text style={styles.heading}>Give The Beautiful Gift of Choice!</Text>
        </View>
      </ImageBackground>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/23_Top_Banner_19_1720682525223_3771_1730195038132.png',
          }}
          style={styles.Image}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.para}>
          A gift that never goes out of style - The Jaypore Gift Card. Perfect
          for every occasion, pick the value of your choice & we will email the
          gift card along with a personalized message for your loved one.
        </Text>
        <Text style={styles.buy}>{'Buy Gift Cards >'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  ImgBackground: {
    width: '100%',
    aspectRatio: 135 / 77,
  },
  Image: {
    width: '90%',
    aspectRatio: 283 / 281,
  },
  maincon: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 22,
    maxWidth: '55%',
    paddingBottom: 10,
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 1.3,
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: -120,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  bottom: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  para: {
    maxWidth: 320,
    lineHeight: 18,
    marginBottom: 10,
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 16,
    textAlign: 'center',
  },
  buy: {
    marginVertical: 30,
    fontFamily: fonts.LatoRegular,
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 500,
  },
});

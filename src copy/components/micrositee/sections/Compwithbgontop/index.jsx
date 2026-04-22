import React from 'react';
import { Image, Pressable, View, Text, StyleSheet } from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';

const ComponentWithBgOnTop = ({
  details,
  AR,
  bgImage = true,
  imgIndex = 0,
  bgIndex = 0,
  reverseBg = false,
  reverseimg = false,
}) => {
  const aspectRatio = AR || 32 / 49;

  const media = details?.MediaDetails || [];

  const rawimages = media.filter((item) => item.a_media_type === 'Image');

  const images = reverseimg ? [...rawimages].reverse() : rawimages;
  console.log('reverse images', images);

  const imgData = images.length > 1 ? images[imgIndex] || images[0] : images[0];

  const textData = media.find((item) => item.a_media_type === 'Text');

  const rawBgs = bgImage
    ? media.filter((item) => item.a_media_type === 'BackgroundImage')
    : [];

  const bgs = reverseBg ? [...rawBgs].reverse() : rawBgs;

  const bgData = bgs.length > 1 ? bgs[bgIndex] || bgs[0] : bgs[0];
  return (
    <View style={[styles.componentContainer, { aspectRatio }]}>
      {bgData?.a_image && (
        <Image
          source={{ uri: bgData.a_image }}
          style={styles.bgTopImage}
          resizeMode="cover"
        />
      )}

      <View style={styles.componentBackground}>
        {imgIndex === 0 && (
          <Text style={styles.componentTxt}>{textData?.a_title}</Text>
        )}

        <Image source={{ uri: imgData?.a_image }} style={styles.ImageData} />

        <Text style={[styles.componentTxt, styles.DecodeText]}>
          {getDecodeText(textData?.a_description)}
        </Text>

        <Pressable style={styles.componentButton}>
          <Text style={styles.componentButtonTxt}>Shop Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ComponentWithBgOnTop;

const styles = StyleSheet.create({
  componentContainer: {
    aspectRatio: 32 / 49,
    backgroundColor: colors.creamColor1,
    overflow: 'hidden',
  },
  componentBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 1,
  },
  componentTxt: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.EBGaramondRegular,
    color: colors.grayColor20,
  },
  componentButton: {
    borderWidth: 1,
    borderColor: colors.grayColor14,
    paddingHorizontal: 25,
    paddingVertical: 2.5,
  },
  componentButtonTxt: {
    fontSize: 12,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor20,
  },
  // bestSellerContainer: {
  //   paddingVertical: 50,
  //   backgroundColor: colors.creamColor2,
  // },
  ImageData: {
    width: '75%',
    aspectRatio: 120 / 151,
    marginBottom: 10,
  },
  DecodeText: {
    width: '85%',
    fontSize: 12,
    fontFamily: fonts.EBGaramondRegular,
    color: colors.grayColor20,
    marginHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  // bestSellerGridContainer: {
  //   paddingHorizontal: 15,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between',
  // },
  // bestSellerGridImage: {
  //   width: '100%',
  //   aspectRatio: 138 / 173,
  // },
  bgTopImage: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: '100%',

    height: 90,
  },
});

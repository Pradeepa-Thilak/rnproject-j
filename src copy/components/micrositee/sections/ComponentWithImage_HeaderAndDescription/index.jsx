import React from 'react';
import { Image, Pressable, View, Text, ImageBackground } from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';
import { styles } from '../styles';

const ComponentWithImage_HeaderAndDescription = ({
  details,
  AR,
  bgImage = true,
  imgIndex = 0,
  bgIndex = 0,
  reverseBg = false,
  // imgar,
  reverseimg = false,
  buttonText = 'Shop Now',
}) => {
  const aspectRatio = AR || 32 / 49;
  // const imageaspectratio = imgar || 120 / 151;

  const media = details?.MediaDetails || [];

  const rawimages = media.filter((item) => item.a_media_type === 'Image');
  const images = reverseimg ? [...rawimages].reverse() : rawimages;

  const imgData = images.length > 1 ? images[imgIndex] || images[0] : images[0];

  const textData = media.find((item) => item.a_media_type === 'Text');

  const finalDescription = getDecodeText(
    imgData?.a_description || textData?.a_description,
  );

  const rawBgs = bgImage
    ? media.filter((item) => item.a_media_type === 'BackgroundImage')
    : [];

  const bgs = reverseBg ? [...rawBgs].reverse() : rawBgs;

  const bgData = bgs.length > 1 ? bgs[bgIndex] || bgs[0] : bgs[0];

  //  CONDITION: image exists or not
  const hasImage = !!imgData?.a_image;
  return (
    <View style={[styles.componentContainer, { aspectRatio }]}>
      <ImageBackground
        source={{ uri: bgData?.a_image }}
        style={styles.componentBackground}
      >
        {/*  HEADING (always) */}
        <Text style={styles.componentTxt}>{textData?.a_title}</Text>

        {/*  IMAGE (only if exists) */}
        {hasImage && (
          <Image source={{ uri: imgData?.a_image }} style={styles.Image} />
        )}
        {/*  DESCRIPTION */}
        <Text style={[styles.componentTxt, styles.finalDescriptiond]}>
          {finalDescription}
        </Text>

        {/*  BUTTON */}
        <Pressable style={styles.componentButton}>
          <Text style={styles.componentButtonTxt}>{buttonText}</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default ComponentWithImage_HeaderAndDescription;

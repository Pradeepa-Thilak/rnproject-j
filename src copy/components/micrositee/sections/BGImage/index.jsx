import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';

const BGImage = ({ details }) => {
  console.log('imf', details);

  const media = details?.MediaDetails || [];

  const txtdata = media.find((item) => item.a_media_type === 'Text');
  const bgdata = media.find((item) => item.a_media_type === 'BackgroundImage');
  console.log('txt', getDecodeText(txtdata?.a_description));
  return (
    <View style={{ aspectRatio: 40 / 19 }}>
      <ImageBackground
        source={{ uri: bgdata?.a_image }}
        style={styles.ImgBackground}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ImgBackground: {
    height: '100%',
    width: '100%',
  },
});
export default BGImage;

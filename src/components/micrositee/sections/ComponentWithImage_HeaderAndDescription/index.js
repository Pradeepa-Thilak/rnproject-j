import React from 'react';
import { Image, Pressable } from 'react-native';
import { View, Text, ImageBackground } from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';
import { styles } from '../../coastal';

const ComponentWithImage_HeaderAndDescription = ({ details, AR, bgImage=true }) => {
 
  const aspectRatio = AR || 32 / 49;

  const media = details?.MediaDetails || [];

  const imgData = media.find(item => item.a_media_type === 'Image');
  const textData = media.find(item => item.a_media_type === 'Text');
  const bgData = bgImage && media.find(item => item.a_media_type === 'BackgroundImage');

  // console.log(getDecodeText(textData?.a_description));


  
  return (
    <View style={[styles.componentContainer, {aspectRatio: aspectRatio}]}>
      <ImageBackground
        source={{ uri: bgData?.a_image}}
        style={styles.componentBackground}
      >
        <Text style={styles.componentTxt}>{textData?.a_title}</Text>
          <Image
            source={{ uri: imgData?.a_image }}
            style={{ width: '75%', aspectRatio: 120/151 }}
          />
        <Text style={[styles.componentTxt,{width: '85%', fontSize: 12, letterSpacing: 0.}]}>{getDecodeText(textData?.a_description) }</Text>
        <Pressable style={styles.componentButton}>
          <Text style={styles.componentButtonTxt}>Shop Now</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default ComponentWithImage_HeaderAndDescription;

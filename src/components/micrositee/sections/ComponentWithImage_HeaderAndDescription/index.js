import React from 'react';
import { Image, Pressable } from 'react-native';
import { View, Text, ImageBackground } from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';
import { styles } from '../../coastal';

const ComponentWithImage_HeaderAndDescription = ({ details, AR, bgImage=true,imgIndex =0,bgIndex=0 ,  reverseBg = false  }) => {
 
  const aspectRatio = AR || 32 / 49;

  const media = details?.MediaDetails || [];
  const images = media.filter(item => item.a_media_type === 'Image');
 
  const imgData =
    images.length > 1
      ? images[imgIndex] || images[0]
      : images[0];

  const textData = media.find(item => item.a_media_type === 'Text');

  const rawBgs = bgImage
  ? media.filter(item => item.a_media_type === 'BackgroundImage')
  : [];


const bgs = reverseBg ? [...rawBgs].reverse() : rawBgs;

const bgData =
  bgs.length > 1
    ? bgs[bgIndex] || bgs[0]
    : bgs[0];

  console.log("ALL IMAGES:", images);

  // console.log(getDecodeText(textData?.a_description));

  
  return (
    <View style={[styles.componentContainer, {aspectRatio: aspectRatio}]}>
    
      
      <ImageBackground
        source={{ uri: bgData?.a_image}}
        style={styles.componentBackground}
      >
        {imgIndex === 0 &&  
        <Text style={styles.componentTxt}>{textData?.a_title}</Text>
        }

  <Image
  
    source={{ uri: imgData?.a_image }}
    style={{ width: '75%', aspectRatio: 120/151, marginBottom: 10 }}
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

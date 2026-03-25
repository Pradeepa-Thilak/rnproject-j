import React from 'react'
import { Image } from 'react-native';
import { View, Text, ImageBackground } from 'react-native';

const ComponentWithImage_HeaderAndDescription = ({ details }) => {

  console.log(details);

  const media = details?.MediaDetails || [];

  const imgData = media.find(item => item.a_media_type === 'Image');
  const textData = media.find(item => item.a_media_type === 'Text');
  const bgData = media.find(item => item.a_media_type === 'BackgroundImage');

  console.log( bgData?.a_image);

  const imageUrl = encodeURI(bgData?.a_image);
  console.log(imageUrl);
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={{ width: '100%', height: 300, justifyContent: 'center',borderWidth: 1, margin: 5 }}
      resizeMode='cover'
    >
          <Text>      
            hello
      </Text>
      <Image source={{ uri:encodeURI(bgData?.a_image) }}
      style={{ width: '100%', height: 300, justifyContent: 'center',borderWidth: 1, margin: 5 }}
      
      />
      </ImageBackground>
  )
}

export default ComponentWithImage_HeaderAndDescription;
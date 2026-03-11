import React from 'react';
import { View, Image } from 'react-native';

const SpriteIcon = ({ x, y }) => {
  return (
    <View
      style={{
        height: 300,
        width: 300,
        backgroundColor: 'blue',
        overflow: 'hidden',
      }}
    >
      <Image
        source={{
          uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/sprite-icons-v20.png',
        }}
        style={{
          height: 800,
          width: 800,
            transform: [{ translateX: 100}, { translateY: -300 }],
        }}
      />
    </View>
  );
};

export default SpriteIcon;

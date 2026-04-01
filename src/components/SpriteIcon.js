import React from 'react';
import { View, Image } from 'react-native';

const SpriteIcon = ({ x, y, w, h, spriteWidth, spriteHeight }) => {
  return (
    <View
      style={{
        width: w,
        height: h,
        overflow: 'hidden',
        // backgroundColor:"blue"
      }}
    >
      <Image
        source={{
          uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/sprite-icons-v20.png',
        }}
        style={{
          width: spriteWidth,
          height: spriteHeight,
          transform: [{ translateX: -x }, { translateY: -y }],
        }}
      />
    </View>
  );
};

export default SpriteIcon;
// const scale = bgSize / originalWidth;
// const spriteWidth = bgSize;
// const spriteHeight = originalHeight * scale;
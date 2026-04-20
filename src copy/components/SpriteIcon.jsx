import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SpriteIcon = ({ x, y, w, h, spriteWidth, spriteHeight }) => {
  return (
    <View style={[styles.container, { width: w, height: h }]}>
      <Image
        source={{
          uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/sprite-icons-v20.png',
        }}
        style={[
          styles.image,
          {
            width: spriteWidth,
            height: spriteHeight,
            transform: [{ translateX: -x }, { translateY: -y }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    // backgroundColor: 'blue',
  },
});

export default SpriteIcon;
// const scale = bgSize / originalWidth;
// const spriteWidth = bgSize;
// const spriteHeight = originalHeight * scale;

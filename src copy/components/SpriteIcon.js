import React from 'react';
import { View, Image } from 'react-native';

const SpriteIcon = ({ x, y, spriteWidth, spriteHeight }) => {
  return (
    <View style={styles.styles}>
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
const styles = StyleSheet.create({
  styles: {
    overflow: 'hidden',
    // backgroundColor:"blue",
  },
});
export default SpriteIcon;
// const scale = bgSize / originalWidth;
// const spriteWidth = bgSize;
// const spriteHeight = originalHeight * scale;

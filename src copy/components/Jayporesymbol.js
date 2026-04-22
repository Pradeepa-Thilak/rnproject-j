import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Jayporesymbol() {
  return (
    <View style={styles.scon}>
      <View style={styles.imgcon}>
        <Image
          source={{
            uri: 'https://imagescdn.jaypore.com/uploads/uspmapping/production/3_Desktop-Jaypore_Core-PDP-Stamp_3771_1772004097360.png',
          }}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scon: {
    marginTop: 8,
    padding: 20,
    backgroundColor: 'white',
  },
  imgcon: {
    width: 134,
    aspectRatio: 134 / 71,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

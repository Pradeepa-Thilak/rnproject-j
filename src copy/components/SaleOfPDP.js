import React from 'react';
import { View, Image } from 'react-native';
import { stylesPro as styles } from '../screens/PDP/PDP_style';

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

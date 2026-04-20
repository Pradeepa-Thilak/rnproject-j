import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { Occasions, ShopByStyles, OccasionFooter } from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';

const ShopByOccasionSection = () => {
  return (
    <View>
      {/* Heading Image */}
      {ShopByStyles.map((item) => (
        <ImageComponents key={item.id} uri={item.uri} height={130} />
      ))}
      {/* Occasion Swiper */}
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {Occasions.map((item) => (
            <Image
              key={item.id}
              source={{ uri: item.uri }}
              style={styles.image}
            />
          ))}
        </ScrollView>
      </View>
      {/* Footer Image */}
      {OccasionFooter.map((item) => (
        <ImageComponents key={item.id} uri={item.uri} height={50} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { height: 255 },
  image: { width: 172, height: 255, resizeMode: 'cover' },
});
export default ShopByOccasionSection;

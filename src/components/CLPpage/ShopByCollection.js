import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { ShopByCollections, ShopByCollectionHeading } from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';
const ShopByCollectionSection = () => {
  return (
    <View>
      {/* Heading Image */}
      {ShopByCollectionHeading.map((item) => (
        <ImageComponents key={item.id} uri={item.uri} height={130} />
      ))}
      {/* Collection Swiper */}
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {ShopByCollections.map((item) => (
            <Image key={item.id} source={{ uri: item.uri }} style={styles.image} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { height: 288 },
  image: { width: 240, height: 288, resizeMode: 'cover' },
});
export default ShopByCollectionSection;
import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { BestsellerTopImg, BestsellerImg } from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';

const BestSellerSection = () => {
  return (
    <View>
      <ImageComponents uri={BestsellerTopImg.uri} height={90} />
      <FlatList
        data={BestsellerImg}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.img} resizeMode="cover" />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: { width: 345.25, height: 207.05 },
});
export default BestSellerSection;
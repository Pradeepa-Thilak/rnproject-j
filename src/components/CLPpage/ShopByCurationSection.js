import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { ShopByCurationImg, ShopByCurationCards, ShopByBrandBottomImg } from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 0.75;

const ShopByCurationSection = () => {
  return (
    <View>
      {/* ✅ Top strip — ImageComponents */}
      <ImageComponents
        uri={ShopByCurationImg[0].uri}
        height={width * 0.11}
      />
        {/* ✅ Brand Image — ImageComponents */}
      <ImageComponents
        uri={ShopByCurationImg[1].uri}
        height={width * 0.31}
      />

      {/* Curation Cards */}
      <FlatList
        data={ShopByCurationCards}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.card} resizeMode="cover" />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* ✅ Brand Bottom Strip — ImageComponents */}
      <ImageComponents
        uri={ShopByBrandBottomImg.uri}
        height={width * 0.09}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 45,
    borderTopLeftRadius: 45,
    marginHorizontal: 6,
  },
});

export default ShopByCurationSection;
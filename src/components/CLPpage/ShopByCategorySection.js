import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import {
  ShopByCategoryHeadingImg,
  ShopByCategoryImg,
  ShopByCategoryImg2,
} from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';


const ShopByCategorySection = () => {
  const renderItem = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.img} resizeMode="cover" />
  );

  return (
    <View>
      <ImageComponents uri={ShopByCategoryHeadingImg[0].uri} height={93} />
      <FlatList
        data={ShopByCategoryImg}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={ShopByCategoryImg2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: { width: 120, height: 147.75 },
});
export default ShopByCategorySection;

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { categories } from '../../lib/ConstData';

const Reclaim = () => {
  const renderProducts = item => (
    <View style={styles.catItems}>
      <Image source={{ uri: item.uri }} style={styles.img} />
      <Text style={styles.catName}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.whole}>
      <View>
        <Text style={styles.head}>Reclaim your roots</Text>
        <Text style={[styles.head, { fontSize: 15 }]}>
          discover your crafts
        </Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item, ind) => ind.toString()}
        renderItem={({ item }) => renderProducts(item)}
        horizontal
        contentContainerStyle={styles.cat}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontFamily: 'EBGaramond-Regular',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#212121',
  },
  whole: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    marginBottom: 20,
  },
  catItems: {
    marginHorizontal: 10,
  },
  cat: {
    margin: 10,
  },
  catName: {
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
  },
  img: {
    // aspectRatio: 1,
    height: 190,
    width: 140,
    resizeMode: 'contain',
  },
});
export default Reclaim;

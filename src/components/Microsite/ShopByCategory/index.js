import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { categories } from '../../../lib/EossData'; 

const STAMP_URI =
  'https://imagescdn.jaypore.com/uploads/micrositmedia/production/50_stamp_3771_1719400233862.png';
const ShopByCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productRow}>
        <Text style={styles.productshop}>SHOP BY CATEGORY</Text>
        <Image source={{ uri: STAMP_URI }} style={styles.stamp} />
      </View>
      <View style={styles.row}>
        {categories.slice(0, 4).map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.chip}
            activeOpacity={0.7}
            onPress={() => handlePress(item)}>
            <Text style={styles.chipText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {categories.slice(4, 7).map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.chip}
            activeOpacity={0.7}
            onPress={() => handlePress(item)}>
            <Text style={styles.chipText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {categories.slice(7, 9).map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.chip}
            activeOpacity={0.7}
            onPress={() => handlePress(item)}>
            <Text style={styles.chipText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 16,
  },
  productshop: {
    fontSize: 26,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '690',
    color: '#212121',
  },
  stamp: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  chip: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 14,
    backgroundColor: '#f9f2df',
  },
  chipText: {
    fontSize: 11,
    fontFamily: 'Lato-Regular',
    color: '#bf7154',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    fontWeight: '700',
  },
});
export default ShopByCategory;
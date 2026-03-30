import React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,} from 'react-native';
import { shopByBrandData } from '../../../lib/EossData';
const ShopByBrand = () => {
  const rows = [];
  for (let i = 0; i < shopByBrandData.length; i += 2) {
    rows.push(shopByBrandData.slice(i, i + 2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SHOP BY BRAND</Text>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(item => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.uri }} style={styles.image} />
            </View>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Shop All Brands</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '700',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    width: '48.5%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    resizeMode: 'cover',
  },
  button: {
    marginTop: 16,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    letterSpacing: 0.5,
    fontWeight:700,
    textAlign:'center',
  },
});

export default ShopByBrand;
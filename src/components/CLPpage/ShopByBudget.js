import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Budget, Budgets, ShopByPrice } from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';
const ShopByBudgetSection = () => {
  return (
    <View>
      {/* Heading Image */}
      {ShopByPrice.map((item) => (
        <ImageComponents key={item.id} uri={item.uri} height={70} width={150} />
      ))}
      {/* Budget Row 1 */}
      <View style={styles.row}>
        {Budget.map((item) => (
          <Image key={item.id} source={{ uri: item.uri }} style={styles.image} />
        ))}
      </View>
      {/* Budget Row 2 */}
      <View style={styles.row}>
        {Budgets.map((item) => (
          <Image key={item.id} source={{ uri: item.uri }} style={styles.image} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  image: { flex: 1, aspectRatio: 123.75/119.78 },
});
export default ShopByBudgetSection;
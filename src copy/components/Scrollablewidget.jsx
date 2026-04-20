import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { stylesPro as styles } from '../screens/PDP/PDP_style';
import Pdpcard from './PDPcard';

export default function Scrollablewidget({
  products,
  title,
  btnclr,
  btntxtcolor,
}) {
  // console.log(products);
  return (
    <View style={styles.parentcon}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        data={products}
        horizontal={true}
        style={styles.scrollable}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Pdpcard item={item} btnclr={btnclr} btntxtcolor={btntxtcolor} />
        )}
      />
    </View>
  );
}

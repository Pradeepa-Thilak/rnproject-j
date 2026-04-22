import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import fonts from '../../../../assests/fonts';
export default function GridImages({ data = [], style, imageStyle }) {
  return (
    <FlatList
      style={style}
      data={data}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      columnWrapperStyle={styles.columnWrapperStyle}
      renderItem={({ item }) => {
        console.log('GRID ITEM:', item);
        const imageUri = typeof item === 'string' ? item : item.image;

        return (
          <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={imageStyle} />

            {item.title && <Text style={styles.label}>{item.title}</Text>}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    paddingVertical: 20,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: fonts.LatoRegular,
    textTransform: 'uppercase',
    width: '90%',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
  },
});

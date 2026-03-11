import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PDP = ({ route }) => {
  const { product } = route.params;
  console.log(product);
  const pro = product._source;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 15,
          flexWrap: 'wrap',
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={styles.breadcrumb}
          onPress={() => navigation.navigate('BottomTab')}
        >
          Home
        </Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>Women</Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>Women Clothing</Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>{pro.DefaultCategoryName}</Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>{pro.Name}</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.ProductName}>{pro.Name}</Text>
        <Text style={styles.ProductCollection}>{pro.Features.Collection}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProductName: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginBottom: 10,
  },
  breadcrumb: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#707070',
    letterSpacing: 0.2,
    lineHeight: 9,
  },
  ProductCollection: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#707070',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 10,
  },
});

export default PDP;

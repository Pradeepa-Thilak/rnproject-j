import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fonts from '../assests/fonts';
const PDP = ({ route }) => {
  const navigation = useNavigation();

  const { product } = route.params;
  console.log(product);
  const pro = product._source;

  return (
    <View>
      <View style={styles.container}>
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

      <View style={styles.ProductContainer}>
        <Text style={styles.ProductName}>{pro.Name}</Text>
        <Text style={styles.ProductCollection}>{pro.Features.Collection}</Text>
      </View>
    </View>
  );
};

export default PDP;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  ProductContainer: {
    paddingHorizontal: 20,
  },
  ProductName: {
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    marginBottom: 10,
  },
  breadcrumb: {
    fontFamily: fonts.LatoRegular,
    fontSize: 12,
    color: '#707070',
    letterSpacing: 0.2,
    lineHeight: 9,
  },
  ProductCollection: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    color: '#707070',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 10,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SortAndFilter from '../components/PLP/SortAndFilter';
import Products from '../components/PLP/ProductsDis';
import { useNavigation } from '@react-navigation/native';

const PLP = () => {
  const sortValues = [
    'Popular',
    'Price Low to High',
    'Price High to Low',
    'Newest to Oldest',
    'Discount',
  ];

  const filterdata = [
    {
      id: 1,
      filter: 'ready to ship',
      data: [
        { name: 'made to order', total: 829 },
        { name: 'dispatced next business day', total: 391 },
        { name: 'dispatched in 2-3 business days', total: 19 },
      ],
    },
    {
      id: 2,
      filter: 'brand',
      data: [
        { name: 'ambar', total: 8 },
        { name: 'anantaa', total: 18 },
        { name: 'banera', total: 8 },
        { name: 'beige', total: 19 },
        { name: 'disha dakshin', total: 17 },
        { name: 'house of surkh', total: 10 },
        { name: 'kamaltaas', total: 48 },
      ],
    },
    {
      id: 3,
      filter: 'color',
      data: [
        { name: 'antique gold', total: 2 },
        { name: 'baby pink', total: 5 },
        { name: 'black', total: 62 },
        { name: 'cobalt blue', total: 3 },
        { name: 'green', total: 83 },
        { name: 'ivory', total: 59 },
        { name: 'lavender purple', total: 13 },
      ],
    },
    {
      id: 4,
      filter: 'size',
      data: [
        { name: 'XS', total: 687 },
        { name: 'S', total: '1115' },
        { name: 'S-S-M', total: '1' },
        { name: 'M', total: '1125' },
        { name: 'L', total: '1147' },
        { name: 'XL', total: '1112' },
        { name: 'XXL', total: '803' },
        { name: '4XL', total: '78' },
      ],
    },
    {
      id: 5,
      filter: 'collection',
      data: [
        { name: 'a glorious saga', total: '7' },
        { name: 'aaboli', total: 1 },
        { name: 'baari', total: 1 },
        { name: 'block-printed Elegance', total: 12 },
        { name: 'celebration ready', total: 2 },
        { name: 'deepta', total: 4 },
        { name: 'embroidered elegance', total: 5 },
      ],
    },
    {
      id: 6,
      filter: 'occasion',
      data: [
        { name: 'casual wear', total: 10 },
        { name: 'ethnic', total: 2 },
        { name: 'festive wear', total: 451 },
        { name: 'party wear', total: 28 },
        { name: 'winter wear', total: 17 },
        { name: 'work essentials', total: 25 },
      ],
    },
    {
      id: 7,
      filter: 'craft',
      data: [
        { name: 'Ajarkh', total: 31 },
        { name: 'Bagh', total: 2 },
        { name: 'chikankari', total: 41 },
        { name: 'Emboridered', total: 6 },
        { name: 'Khadi', total: 2 },
        { name: 'printed', total: 40 },
        { name: 'shibori', total: 5 },
      ],
    },
    {
      id: 8,
      filter: 'top material',
      data: [
        { name: 'basic', total: 1 },
        { name: 'chanderi', total: 33 },
        { name: 'cotton', total: 351 },
        { name: 'embroidered', total: 1 },
        { name: 'georgette', total: 1 },
        { name: 'kota', total: 9 },
      ],
    },
    {
      id: 9,
      filter: 'pattern',
      data: [
        { name: 'Embroidered', total: 328 },
        { name: 'printed', total: 95 },
        { name: 'solid', total: 83 },
        { name: 'striped', total: 6 },
        { name: 'yarn dyed', total: 1 },
      ],
    },
    {
      id: 10,
      filter: 'top closure',
      data: [
        { name: 'button', total: 151 },
        { name: 'hook and eye', total: 1 },
        { name: 'slip on', total: 1007 },
        { name: 'tie up', total: 6 },
        { name: 'zip', total: 23 },
      ],
    },
    {
      id: 11,
      filter: 'bottom material',
      data: [
        { name: 'basic', total: 1 },
        { name: 'chanderi', total: 33 },
        { name: 'cotton', total: 351 },
        { name: 'embroidered', total: 1 },
        { name: 'georgette', total: 1 },
        { name: 'kota', total: 9 },
      ],
    },
    {
      id: 12,
      filter: 'bottom opening',
      data: [
        { name: 'ankle', total: 400 },
        { name: 'elasticated', total: 53 },
        { name: 'tapered', total: 28 },
        { name: 'wide leg', total: 129 },
        { name: 'straight', total: 565 },
        { name: 'boot cut', total: 4 },
      ],
    },
    {
      id: 13,
      filter: 'dupatta',
      data: [
        { name: 'with dupatta', total: 578 },
        { name: 'without dupatta', total: 403 },
        { name: 'yes', total: 2 },
      ],
    },
    {
      id: 14,
      filter: 'fit',
      data: [
        { name: 'flared', total: 2 },
        { name: 'loose fit', total: 99 },
        { name: 'regular fit', total: 630 },
        { name: 'wide leg', total: 1 },
        { name: 'slim fit', total: 2 },
        { name: 'straight fit', total: 271 },
      ],
    },
    {
      id: 15,
      filter: 'lining',
      data: [
        { name: 'with lining', total: 607 },
        { name: 'with slip', total: 128 },
        { name: 'without lining', total: 384 },
      ],
    },
    {
      id: 16,
      filter: 'sleeve length',
      data: [
        { name: '3/4th sleeve', total: 989 },
        { name: 'full sleeves', total: 148 },
        { name: 'half sleves', total: 23 },
        { name: 'short sleeves', total: 2 },
        { name: 'sleeveless', total: 30 },
      ],
    },
    {
      id: 17,
      filter: 'pockets',
      data: [
        { name: '1', total: 77 },
        { name: '2', total: 258 },
        { name: 'no', total: 22 },
        { name: 'no pocket', total: 187 },
      ],
    },
    {
      id: 18,
      filter: 'neck',
      data: [
        { name: 'round neck', total: 80 },
        { name: 'square neck', total: 1 },
        { name: 'tie up neck', total: 2 },
        { name: 'u neck', total: 2 },
        { name: 'v neck', total: 64 },
        { name: 'collar neck', total: 4 },
        { name: 'halter neck', total: 1 },
      ],
    },
    {
      id: 19,
      filter: 'discount',
      data: [{ name: '40% - 50%', total: 16 }],
    },
    { id: 20, filter: 'price' },
  ];

 
  const navigation = useNavigation();

  return (
    <View
      style={{ backgroundColor: '#fff', position: 'relative', height: '100%' }}
    >
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 15,
        }}
      >
        <Text
          style={styles.breadcrumb}
          onPress={() => navigation.navigate('BottomTab')}
        >
          Home
        </Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>Sale</Text>
      </View>

      <Products />

      <View style={styles.bottomContain}>
        <SortAndFilter sortValues={sortValues} filterData={filterdata} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContain: {
    position: 'absolute',
    bottom: 0,
  },
  breadcrumb: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#707070',
    letterSpacing: 0.2,
  },
});

export default PLP;

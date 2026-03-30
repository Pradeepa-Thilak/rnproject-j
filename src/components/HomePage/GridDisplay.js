import React from 'react';
import { Pressable, View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Gridproducts } from '../../lib/ConstData';

const GridDisplay = ({ navigation: navProp }) => {
  const navigationHook = useNavigation();
  const navigation = navProp || navigationHook;

  const renderItems = (item) => (
    <Pressable
      style={styles.product}
      onPress={() => {
        if (item.navigationlink) {
          navigation.navigate(item.navigationlink);
        }
      }}
    >
      <View style={{ aspectRatio: 279 / 365 }}>
        <Image source={{ uri: item.uri }} style={styles.img} />
      </View>

      <Text style={styles.imgName}>{item.name}</Text>
      <Text style={styles.imgCat}>{item.cat}</Text>
      <Text style={styles.imgDes}>{item.des}</Text>
      <Text style={styles.shop}>shop now</Text>
    </Pressable>
  );

  return (
    <View>
      <View style={styles.whole}>
        <View style={styles.header}>
          <Text style={styles.gridHead}>featured collections</Text>
        </View>
        <FlatList
          data={Gridproducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => renderItems(item)}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
      <View style={{ paddingHorizontal: 10, aspectRatio: 600 / 134 }}>
        <Image
          source={{
            uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/3_710X158-Feb-09-The-World-of-Botanicals-Skinny-Banner-Mobile_3771_1770631596664.jpg',
          }}
          style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  header: {
    marginVertical: 20,
  },
  gridHead: {
    fontFamily: 'EBGaramond-Regular',
    fontSize: 25,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#212121',
  },
  product: {
    width: '50%',
    marginRight: 10,
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
  },
  imgName: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontFamily: 'EBGaramond-Regular',
    paddingTop: 2,
    marginBottom: 2,
    color: '#212121',
  },
  imgCat: {
    fontSize: 11.5,
    fontFamily: 'EBGaramond-Regular',
    textTransform: 'uppercase',
    marginBottom: 2,
    color: '#212121',
  },
  imgDes: {
    fontSize: 12,
    fontFamily: 'EBGaramond-Regular',
    paddingVertical: 2,
    color: '#707070',
  },
  shop: {
    fontSize: 13,
    fontFamily: 'EBGaramond-Regular',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    color: '#bb4225',
  },
});

export default GridDisplay;
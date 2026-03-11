import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const CurvedDisplay = () => {
  const first = {
    id: 1,
    uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Jaypore_Finest-1_3771_1770632379038.jpg?w=600&auto=format',
    name: 'The World of Botanicals',
    cat: 'styles for modern indian summer',
  };
  const curved = [
    {
      id: 2,
      uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Jaypore_Finest-2_3771_1770632434812.jpg?w=300&auto=format',
      name: 'The Brass & Kansa Edit',
      cat: 'gifting-perfect brass and kansa serveware',
    },
    {
      id: 3,
      uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Jaypore_Finest-3_3771_1770632481475.jpg?w=300&auto=format',
      name: 'Silver at Old Rates',
      cat: 'handcrafted jewels at older, lower prices',
    },
  ];

  const renderProducts = item => (
    <View style={styles.product}>
      <Image source={{ uri: item.uri }} style={styles.img} />
      <Text style={styles.imgName}>{item.name}</Text>
      <Text style={[styles.imgCat, { fontSize: 12 }]}>{item.cat}</Text>
      <Text style={styles.shop}>shop now</Text>
    </View>
  );

  return (
    <View style={styles.whole}>
      <View style={styles.head}>
        <Text style={styles.headText}>japore finest</Text>
      </View>
      <View>
        <View style={{ width: '100%', marginBottom: 15 }}>
          <Image
            source={{ uri: first.uri }}
            style={{
              height: 450,
              width: '100%',
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.imgName}>{first.name}</Text>
          <Text style={styles.imgCat}>{first.cat}</Text>
          <Text style={styles.shop}>shop now</Text>
        </View>
        <FlatList
          data={curved}
          initialNumToRender={1}
          renderItem={({ item }) => renderProducts(item)}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  head: {
    marginBottom: 35,
  },
  headText: {
    fontSize: 30,
    fontFamily: 'EBGaramond-Regular',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#212121',
  },
  product: {
    width: '50%',
    marginRight: 10,
    marginBottom: 20,
  },
  imgName: {
    flexWrap: 'wrap',
    fontSize: 20,
    fontFamily: 'EBGaramond-Regular',
    paddingTop: 2,
    marginBottom: 2,
    color: '#212121',
  },
  img: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  imgCat: {
    fontSize: 13,
    fontFamily: 'EBGaramond-Regular',
    textTransform: 'uppercase',
    marginBottom: 2,
    color: '#212121',
  },
  shop: {
    fontSize: 13,
    fontFamily: 'EBGaramond-Regular',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    color: '#bb4225',
  },
});

export default CurvedDisplay;

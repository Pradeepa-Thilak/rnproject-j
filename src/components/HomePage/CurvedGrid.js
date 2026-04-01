import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CurvedDisplay = () => {
  const first = {
    id: 1,
    uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Jaypore_Finest-1_3771_1770632379038.jpg',
    name: 'The World of Botanicals',
    cat: 'styles for modern indian summer',
    navigationlink: 'dokra'
  };
  const curved = [
    {
      id: 2,
      uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Jaypore_Finest-2_3771_1770632434812.jpg',
      name: 'The Brass & Kansa Edit',
      cat: 'gifting-perfect brass and kansa serveware',
      navigationlink: 'SareeStore',
    },
    {
      id: 3,
      uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Jaypore_Finest-3_3771_1770632481475.jpg',
      name: 'Silver at Old Rates',
      cat: 'handcrafted jewels at older, lower prices',
      navigationlink: 'SareeStore',
    },
  ];
   const navigation = useNavigation();

  const renderProducts = item => (
    <Pressable
    onPress={()=>navigation.navigate(item.navigationlink || 'dokra')}
     style={styles.product}>
      <View style={{aspectRatio: 300/453}}>
      <Image source={{ uri: item.uri }} style={styles.img} />

      </View>
      <Text style={styles.imgName}>{item.name}</Text>
      <Text style={styles.imgCat}>{item.cat}</Text>
      <Text style={styles.shop}>shop now</Text>
    </Pressable>
  );
  return (
    <View style={styles.whole}>
      {/* HEADER */}
      <View style={styles.head}>
        <Text style={styles.headText}>jaypore finest</Text>
      </View>
      <View>
        <Pressable 
        onPress={()=>navigation.navigate(first.navigationlink)}
        style={{ width: '100%', marginBottom: 15 }}>
          <View style={{aspectRatio: 600/700}}>
          <Image
            source={{ uri: first.uri }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
          />
          </View>
          <Text style={styles.imgName}>{first.name}</Text>
          <Text style={styles.imgCat}>{first.cat}</Text>
          <Text style={styles.shop}>shop now</Text>
        </Pressable>
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
export default CurvedDisplay;
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
    width: '48%',
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  imgName: {
    fontSize: 18,
    fontFamily: 'EBGaramond-Regular',
    marginTop: 5,
    marginBottom: 2,
    color: '#212121',
  },
  imgCat: {
    fontSize: 12,
    fontFamily: 'EBGaramond-Regular',
    textTransform: 'uppercase',
    marginBottom: 2,
    color: '#212121',
  },
  shop: {
    fontSize: 13,
    fontFamily: 'EBGaramond-Regular',
    textDecorationLine: 'underline',
    color: '#bb4225',
  },
});
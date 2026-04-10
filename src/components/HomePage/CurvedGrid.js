import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CurvedDisplay = ({details}) => {
 
   const navigation = useNavigation();

    if (!details) return null;

  const media = (details?.MediaDetails || [])
    .filter(item => item.a_media_type === "Image")
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

      const firstItem = media[0];
  const restItems = media.slice(1);

  const renderProducts = ({item}) => (
    <Pressable
    // onPress={()=>navigation.navigate(item.navigationlink || 'dokra')}

     style={styles.product}>
      <View style={{aspectRatio: 300/453}}>
      <Image source={{ uri: item.a_image }} style={styles.img} />

      </View>
      <Text style={styles.imgName}>{item.a_title}</Text>
      <Text style={styles.imgCat}>{item.a_shortdescription}</Text>
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
        // onPress={()=>navigation.navigate(first.navigationlink)}

        style={{ width: '100%', marginBottom: 15 }}>
          <View style={{aspectRatio: 600/700}}>
          <Image
            source={{ uri: firstItem.a_image }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
          />
          </View>
          <Text style={styles.imgName}>{firstItem.a_title}</Text>
          <Text style={styles.imgCat}>{firstItem.a_shortdescription}</Text>
          <Text style={styles.shop}>shop now</Text>
        </Pressable>
        <FlatList
          data={restItems}
          initialNumToRender={1}
              renderItem={renderProducts}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
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
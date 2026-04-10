import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Reclaim = ({details}) => {

  const navigation = useNavigation();
  const media = (details?.MediaDetails || []).sort((a,b)=> Number(a.a_sequence )- (Number(b.a_sequence)))
  const renderProducts = ({item}) => (
    <Pressable style={styles.catItems} 
    // onPress={() => navigation.navigate('CLP')}
    >
      <View style={{aspectRatio: 279/384}}>
      <Image source={{ uri: item.a_image }} style={styles.img} />
      </View>
      <Text style={styles.catName}>{item.a_title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.whole}>
      <View>
        <Text style={styles.head}>Reclaim your roots</Text>
        <Text style={[styles.head, { fontSize: 15 }]}>
          discover your crafts
        </Text>
      </View>
      <FlatList
        data={media}
        keyExtractor={(item, ind) => ind.toString()}
         renderItem={renderProducts}
        horizontal
        contentContainerStyle={styles.cat}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontFamily: 'EBGaramond-Regular',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#212121',
  },
  whole: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    
  },
  catItems: {
    marginHorizontal: 10,
  },
  cat: {
    margin: 10,
  },
  catName: {
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
  },
  img: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
});
export default Reclaim;

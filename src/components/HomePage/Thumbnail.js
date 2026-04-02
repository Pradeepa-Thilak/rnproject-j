import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Pressable, Text, Image, FlatList, StyleSheet } from 'react-native';
import { thumbnailBanner } from '../../lib/ConstData';

const Thumbnail = () => {
  const navigation = useNavigation();
  const renderThumbNail = item => (
    <Pressable
      style={styles.thumbWhole}
      onPress={() => navigation.navigate(item.navigationlink)}
    >
      <View style={{aspectRatio: 1}}>
      <Image source={{ uri: item.uri }} style={styles.img} />
      </View>
      <Text style={styles.thumbText}>{item.label}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={thumbnailBanner}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => renderThumbNail(item)}
      horizontal
      style={styles.thumb}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  thumb: {
    backgroundColor: '#fff',
    padding: 15,
  },
  thumbWhole: {
    width: 100,
    marginRight: 15,
    alignContent: 'center',
  },
  thumbText: {
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 0.2,
    marginTop: 10,
  },
  img: {
    width: '100%',
    height: '100%'
  }
});

export default Thumbnail;

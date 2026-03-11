import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, Image, FlatList, StyleSheet } from 'react-native';
import { thumbnailBanner } from '../../lib/ConstData';

const Thumbnail = () => {
  const navigation = useNavigation();
  const renderThumbNail = item => (
    <Pressable
      style={styles.thumbWhole}
      onPress={() => navigation.navigate('PLP')}
    >
      <Image source={{ uri: item.uri }} height={100} width={100} />
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
});

export default Thumbnail;

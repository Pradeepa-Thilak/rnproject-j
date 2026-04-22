import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import { handleNavigation } from '../../utils/NavigationHelper';
import fonts from '../../assests/fonts';

const Thumbnail = ({ details }) => {
  const navigation = useNavigation();
  const media = details?.MediaDetails || [];
  media.sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));
  const renderThumbNail = (item) => (
    <Pressable
      style={styles.thumbWhole}
      onPress={() => handleNavigation(item.a_link, navigation)}
    >
      <View style={styles.thumbimgwrapper}>
        <Image source={{ uri: item.a_image }} style={styles.img} />
      </View>
      <Text style={styles.thumbText}>{item.a_title}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={media}
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
    fontFamily: fonts.LatoRegular,
    textTransform: 'uppercase',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 0.2,
    marginTop: 10,
    fontWeight: 700,
  },
  thumbimgwrapper: { aspectRatio: 1 },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default Thumbnail;

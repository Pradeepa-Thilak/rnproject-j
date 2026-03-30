import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { newInData } from '../../../lib/EossData';

const NewIn = () => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const pages = [];
  for (let i = 0; i < newInData.length; i += 2) {
    pages.push(newInData.slice(i, i + 2));
  }

  const handleScroll = event => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    setActiveIndex(index);
  };

  const renderPage = ({ item: page }) => (
    <View style={[styles.page, { width }]}>
      {page.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <IconButton
              icon="heart-outline"
              iconColor="#212121"
              size={20}
              style={styles.wishlistBtn}
            />
          </View>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New In</Text>

      <FlatList
        ref={flatListRef}
        data={pages}
        renderItem={renderPage}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '690',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  page: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    aspectRatio: 3 / 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
 wishlistBtn: {
    position: 'absolute',
    top: 2,
    right: 2,
    margin: 0,
},

  brand: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: 'Lato-Bold',
    color: '#212121',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 3,
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: '#707070',
    lineHeight: 17,
  },
  price: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: 'Lato-Bold',
    color: '#212121',
    fontWeight: '700',
  },
});

export default NewIn;
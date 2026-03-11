import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { bannerImg } from '../../lib/ConstData';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HeroBanner = () => {

  const navigation = useNavigation();

  const [active, setActive] = useState(0);
  const flatListRef = useRef(null);

  const loopData = [...bannerImg, ...bannerImg, ...bannerImg];
  const currentIndex = useRef(bannerImg.length);

  const handleScroll = event => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    currentIndex.current = slide;
    setActive(slide % bannerImg.length);

    if (slide >= bannerImg.length * 2) {
      const restInd = slide - bannerImg.length;
      flatListRef.current.scrollToIndex({
        index: restInd,
        animated: false,
      });
    }

    if (slide < bannerImg.length) {
      const restInd = slide + bannerImg.length;
      flatListRef.current.scrollToIndex({
        index: restInd,
        animated: false,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex.current + 1;

      if (nextIndex >= bannerImg.length * 2) {
        nextIndex = bannerImg.length;
      }

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      currentIndex.current = nextIndex;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}
    >
      <FlatList
        data={loopData}
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={bannerImg.length}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('PLP')}>
            <Image source={{ uri: item.uri }} style={styles.bannerImg} />
          </Pressable>
        )}
      />

      <View style={styles.dotContain}>
        {bannerImg.map((item, ind) => (
          <Pressable
            key={ind}
            onPress={() => {
              flatListRef.current.scrollToIndex({
                index: ind + bannerImg.length,
                animated: true,
              });
            }}
            hitSlop={1}
          >
            <View
              style={[
                styles.dots,
                active === ind && { borderColor: '#bb4425' },
              ]}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerImg: {
    width: width,
    height: 500,
  },
  dotContain: {
    margin: 10,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 7,
  },
  dots: {
    borderWidth: 1.5,
    width: 8,
    height: 8,
    transform: [{ rotate: '45deg' }],
    borderColor: '#ffb3b2',
  },
});

export default HeroBanner;

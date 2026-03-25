import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { bannerImg } from '../../lib/ConstData';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
const HeroBanner = ({ isHome = true, clpData, aspectRatio}) => {

  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const flatListRef = useRef(null);
  // Data — HomeScreen: bannerImg, CLP: clpData
  const bannerData = isHome ? bannerImg : clpData;
  const loopData = [...bannerData, ...bannerData, ...bannerData];
  const currentIndex = useRef(bannerData.length);
  const handleScroll = event => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    currentIndex.current = slide;
    setActive(slide % bannerData.length);
    if (slide >= bannerData.length * 2) {
      const restInd = slide - bannerData.length;
      flatListRef.current.scrollToIndex({
        index: restInd,
        animated: false,
      });
    }
    if (slide < bannerData.length) {
      const restInd = slide + bannerData.length;
      flatListRef.current.scrollToIndex({
        index: restInd,
        animated: false,
      });
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex.current + 1;
      if (nextIndex >= bannerData.length * 2) {
        nextIndex = bannerData.length;
      }
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      currentIndex.current = nextIndex;
    }, isHome ? 2000 : 3000);  //  HomeScreen: 2000, CLP: 3000
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={{ backgroundColor: '#fff' }}>
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
        initialScrollIndex={bannerData.length}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('PLP')}
            style={[
              styles.bannerImgContain,
              { aspectRatio: aspectRatio }  
            ]}
          >
            <Image
              source={{ uri: item.uri }}
              style={styles.bannerImg}
            />
          </Pressable>
        )}
      />
      {/*  Dots */}
      <View style={styles.dotContain}>
        {bannerData.map((item, ind) => (
          <Pressable
            key={ind}
            onPress={() => {
              flatListRef.current.scrollToIndex({
                index: ind + bannerData.length,
                animated: true,
              });
            }}
            hitSlop={1}
          >
            {isHome ? (
              //  HomeScreen — diamond
              <View
                style={[
                  styles.dots,
                  active === ind && { borderColor: '#BB4425' },
                ]}
              />
            ) : (
              //  CLP — circle
              <View
                style={[
                  styles.dotsCLP,
                  active === ind && styles.dotsCLPActive,
                ]}
              />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bannerImg: {
    width: width,
    height: '100%',
    resizeMode: 'contain',
  },
  bannerImgContain: {
    // No height/width — aspectRatio prop handles it!
  },
  dotContain: {
    marginVertical: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  // HomeScreen — diamond
  dots: {
    borderWidth: 1.5,
    width: 8,
    height: 8,
    transform: [{ rotate: '45deg' }],
    borderColor: '#FFB3B2',
  },
  // CLP — circle
  dotsCLP: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dotsCLPActive: {
    backgroundColor: '#BB4425',
    borderColor: '#BB4425',
  },
});
export default HeroBanner;
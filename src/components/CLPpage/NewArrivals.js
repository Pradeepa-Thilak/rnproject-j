import React, { useRef, useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { NewArrivalHeadingImg, NewArrivalsImg } from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';

const LOOP_DATA = [...NewArrivalsImg, ...NewArrivalsImg, ...NewArrivalsImg];
const MIDDLE_OFFSET = NewArrivalsImg.length;

const NewArrivalsSection = () => {
  const [current, setCurrent] = useState(0);
  const flatListRef = useRef(null);
  const currentIndexRef = useRef(MIDDLE_OFFSET);
  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: MIDDLE_OFFSET, animated: false });
    }, 100);
  }, []);
  const onScroll = e => {
    const index = Math.round(e.nativeEvent.contentOffset.x / styles.img.width);
    currentIndexRef.current = index;
    const realIndex =
      ((index - MIDDLE_OFFSET) % NewArrivalsImg.length + NewArrivalsImg.length) %
      NewArrivalsImg.length;
    setCurrent(realIndex);
  };
  const onMomentumScrollEnd = e => {
    const index = Math.round(e.nativeEvent.contentOffset.x / styles.img.width);
    currentIndexRef.current = index;
    if (index <= MIDDLE_OFFSET - 1) {
      const newIndex = index + NewArrivalsImg.length;
      currentIndexRef.current = newIndex;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: false });
    } else if (index >= LOOP_DATA.length - MIDDLE_OFFSET) {
      const newIndex = index - NewArrivalsImg.length;
      currentIndexRef.current = newIndex;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: false });
    }
  };
  return (
    <View>
      <ImageComponents uri={NewArrivalHeadingImg[0].uri} height={93} />
      <View>
        <FlatList
          ref={flatListRef}
          data={LOOP_DATA}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.uri }} style={styles.img} resizeMode="cover" />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScroll}
          scrollEventThrottle={16}
          onMomentumScrollEnd={onMomentumScrollEnd}
          getItemLayout={(_, index) => ({
            length: styles.img.width,
            offset: styles.img.width * index,
            index,
          })}
          initialNumToRender={LOOP_DATA.length}
        />
        <View style={styles.dotsContainer}>
          {NewArrivalsImg.map((_, index) => (
            <View key={index} style={[styles.dot, current === index && styles.activeDot]} />
          ))}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: { width: 400, height: 243.75 },
  img: { width: 400, height: 243.75 },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#b59a5f',
    marginHorizontal: 4,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: '#b59a5f',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
export default NewArrivalsSection;
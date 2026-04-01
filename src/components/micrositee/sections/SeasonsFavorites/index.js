import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;
const IMAGE_ASPECT_RATIO = 175 / 231;


export default function  SeasonsFavorites ({ position ,api}) {
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api);
        const json = await res.json();

        const section = json?.results?.SectionDetails?.find(
          sec => sec.position === position
        );

        if (!section) return;

      
        const titleItem = section.MediaDetails.find(
          item => item.a_media_type === 'Text'
        );

        setHeading(titleItem?.a_title || '');

        
        const formattedData = section.MediaDetails
          .filter(item => item.a_media_type === 'Image')
          .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
          .map(item => ({
            id: item.media_id,
            uri: item.a_image,
            label: item.a_title,
          }));

        setData(formattedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [position,api]);

  const handleScroll = event => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / CARD_WIDTH
    );
    if (index <= data.length - 2) {
      setActiveIndex(index);
    }
  };

  const handleDotPress = index => {
    setActiveIndex(index);
    flatListRef.current?.scrollToOffset({
      offset: index * CARD_WIDTH,
      animated: true,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
  
  
    <View style={[styles.container,{paddingTop: heading ? 24 : 10}]}>
     {heading && (
  <Text style={styles.heading}>{heading}</Text>
)}

      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={CARD_WIDTH}
        snapToAlignment="start"
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 10 }}
        getItemLayout={(_, index) => ({
          length: CARD_WIDTH,
          offset: CARD_WIDTH * index,
          index,
        })}
      />

      <View style={styles.dotsRow}>
  {[0, 1, 2, 3].map(i => (
    <TouchableOpacity key={i} onPress={() => handleDotPress(i)}>
      <View
        style={[
          styles.dot,
          i === activeIndex && styles.activeDot,
        ]}
      />
    </TouchableOpacity>
  ))}
</View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom:40
 
  },
  heading: {
    fontSize: 22,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '690',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  card: {
    width: CARD_WIDTH,
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    aspectRatio: IMAGE_ASPECT_RATIO,
  
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: '#212121',
    textAlign: 'center',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#bf7154',
    width: 10,
    height: 10,
  },
});

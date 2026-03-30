import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,Dimensions,} from 'react-native';
import { halfBannerCardData } from '../../../lib/EossData';
const { width } = Dimensions.get('window');
const HalfBannerCard = () => {
  return (
    <View>
      {halfBannerCardData.map(item => (
        <View
          key={item.id}
          style={[
            styles.container,
            item.imagePosition === 'right' && { flexDirection: 'row-reverse' },
          ]}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.divider} />
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => console.log('Shop Now pressed:', item.title)}>
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fbf4e7',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  imageWrapper: {
    width: width * 0.50,
    aspectRatio: 0.85,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbf4e7',
  },
  title: {
    fontSize: 22,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '600',
    color: '#bf7154',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  divider: {
    width: 40,
    height: 1.5,
    backgroundColor: '#bf7154',
    marginTop: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    fontFamily: ' EBGaramondRegular',
    color: '#212121',
    textAlign: 'center',
    lineHeight: 18,
  },
  button: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'EBGaramondRegular',
    color: '#212121',
    letterSpacing: 0.5,
  },
});

export default HalfBannerCard;
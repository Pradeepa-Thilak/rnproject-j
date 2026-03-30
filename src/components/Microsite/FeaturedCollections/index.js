import React from 'react';
import { View,Text, StyleSheet,Image,TouchableOpacity,} from 'react-native';
import { featuredCollectionsData, BADGE_URI } from '../../../lib/EossData';

const FeaturedCollections = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>{"SEASON'S MOST-LOVED\nCOLLECTIONS"}</Text>
        {featuredCollectionsData.some(item => item.showBadge) && (
          <Image
            source={{ uri: BADGE_URI }}
            style={styles.headingBadge}
          />
        )}
      </View>
      {featuredCollectionsData.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
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
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '690',
    color: '#212121',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 35,
  },
  headingBadge: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
     marginLeft: 80,
     marginTop: -1,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4.5/ 3,
  },
  image: {
    width: '100%',
    height: '100%',       
    resizeMode: 'cover',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '600',
    color: '#212121',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    letterSpacing: 0.5,
    fontWeight:700,
  },
});

export default FeaturedCollections;
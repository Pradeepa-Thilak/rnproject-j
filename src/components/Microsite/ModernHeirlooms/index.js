import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const IMAGE_ASPECT_RATIO = 335 / 335;

const ModernHeirlooms = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/1_26062025_M_Jewelry_Banner_3771_1750932698902.jpg',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Modern Heirlooms</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Handcrafted jewels of the season to cast a luminous glow on every
          celebration
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 24,
    paddingTop: 50,
    alignItems: 'center',
  },
  imageWrapper: {
    width: width,
    aspectRatio: IMAGE_ASPECT_RATIO,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    width: '75%',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '600',
    color: '#Bf7154',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  divider: {
    width: 150,
    height: 1.5,
    backgroundColor: '#Bf7154',
    marginTop: 8,
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 48,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    letterSpacing: 0.5,
  },
});

export default ModernHeirlooms;
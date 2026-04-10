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

export default function WearYourRoots({ details, isNeeded = true }) {

  const media = details?.MediaDetails || [];

  if (!media.length) return null;

  // 🔥 Get image item
  const item = media.find(
    m => m.a_media_type === 'Image'
  );

  if (!item) return null;

  const data = {
    image: item.a_image,
    title: item.a_title,
    description: item.a_shortdescription,
    link: item?.links?.[0]?.link || item.a_groupLinks,
  };

  return (
    <View style={styles.container}>

      {/* 🔹 IMAGE */}
      <View style={styles.imageWrapper}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>

      {/* 🔹 TEXT */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>
          {data.description}
        </Text>

        {/* 🔥 SAME isNeeded LOGIC */}
        {isNeeded && (
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 24,
    alignItems: 'center',
  },
  
  imageWrapper: {
    width: '100%',
    aspectRatio: IMAGE_ASPECT_RATIO,
    paddingHorizontal:24,
    marginHorizontal: 10,
    marginBottom: 24,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  textContainer: {
    width: '50%',
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
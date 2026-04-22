import React from 'react';

import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const IMAGE_ASPECT_RATIO = 335 / 335;

export default function WearYourRoots({ details, isNeeded = true }) {
  const media = details?.MediaDetails || [];

  if (!media.length) return null;

  const item = media.find((m) => m.a_media_type === 'Image');

  if (!item) return null;

  const data = {
    image: item.a_image,
    title: item.a_title,
    description: item.a_shortdescription,
    link: item?.links?.[0]?.link || item.a_groupLinks,
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>{data.description}</Text>

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
    backgroundColor: colors.whiteColor1,
    paddingBottom: 24,
    alignItems: 'center',
  },

  imageWrapper: {
    width: '100%',
    aspectRatio: IMAGE_ASPECT_RATIO,
    paddingHorizontal: 24,
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
    fontFamily: fonts.EBGaramondRegular,
    fontWeight: '600',
    color: colors.brownColor4,
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  divider: {
    width: 150,
    height: 1.5,
    backgroundColor: colors.brownColor4,
    marginTop: 8,
    marginBottom: 12,
  },

  description: {
    fontSize: 13,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor22,
    textAlign: 'center',
    lineHeight: 22,
  },

  button: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.grayColor22,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 48,
  },

  buttonText: {
    fontSize: 13,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor22,
    letterSpacing: 0.5,
  },
});

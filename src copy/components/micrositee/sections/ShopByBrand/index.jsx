import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';

export default function ShopByBrand({ details, isNeeded = true }) {
  const media = details?.MediaDetails || [];

  if (!media.length) return null;

  const headingItem = media.find(
    (item) => item.a_media_type === 'Text' && item.a_sequence === '0',
  );

  const heading = headingItem?.a_title || '';

  const buttonItem = media.find(
    (item) =>
      item.a_media_type === 'Text' &&
      item.a_title?.toLowerCase().includes('shop'),
  );

  const buttonText = buttonItem?.a_title || 'Shop All Brands';

  const images = media
    .filter((item) => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
    .map((item) => ({
      id: item.media_id,
      uri: item.a_image,
    }));

  const rows = [];
  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      {heading ? <Text style={styles.heading}>{heading}</Text> : null}
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.uri }} style={styles.image} />
            </View>
          ))}
        </View>
      ))}

      {isNeeded && (
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor1,
    paddingBottom: 60,
    paddingHorizontal: 12,
  },

  heading: {
    fontSize: 26,
    fontFamily: fonts.EBGaramondRegular,
    color: colors.grayColor22,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  card: {
    width: '48.5%',
  },

  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    resizeMode: 'cover',
  },

  button: {
    marginTop: 24,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.grayColor22,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },

  buttonText: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor22,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { decode } from 'html-entities';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function GiftGridSection({ details }) {
  const media = details?.MediaDetails || [];
  if (!media.length) return null;

  const textItem = media.find((item) => item.a_media_type === 'Text');

  const images = media
    .filter((item) => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

  // 🔥 helper (same pattern)
  const decodeText = (text) => {
    if (!text || typeof text !== 'string') return '';
    try {
      return decode(text).replace(/<[^>]+>/g, '');
    } catch {
      return text;
    }
  };

  return (
    <View style={styles.container}>
      {textItem?.a_title && (
        <Text style={styles.heading}>{decodeText(textItem.a_title)}</Text>
      )}

      {textItem?.a_shortdescription && (
        <Text style={styles.subText}>
          {decodeText(textItem.a_shortdescription)}
        </Text>
      )}

      <View style={styles.grid}>
        {images.map((item, index) => (
          <View key={item.media_id || index} style={styles.card}>
            <Image source={{ uri: item.a_image }} style={styles.image} />

            {item.a_shortdescription && (
              <Text style={styles.desc}>
                {decodeText(item.a_shortdescription)}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: fonts.EBGaramondRegular,
    color: colors.grayColor22,
    marginBottom: 8,
  },

  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.grayColor18,
  },

  grid: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  card: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },

  image: {
    width: '100%',
    aspectRatio: 331 / 431,
  },

  desc: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: colors.grayColor11,
    lineHeight: 16,
    maxWidth: 300,
  },
});

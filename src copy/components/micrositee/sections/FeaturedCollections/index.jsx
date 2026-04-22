import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { decode } from 'html-entities';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function FeaturedCollections({ details }) {
  const media = details?.MediaDetails || [];

  if (!media.length) return null;

  // Heading (Text type)
  const titleItem = media.find((item) => item.a_media_type === 'Text');

  const heading = decode(titleItem?.a_title || '');

  // Sort images
  const sortedImages = media
    .filter((item) => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

  // Badge
  const badgeItem = sortedImages.find(
    (item) => item.a_title === 'discount image',
  );

  const badge = badgeItem?.a_image || null;

  // Cards
  const cards = sortedImages
    .filter((item) => item.a_title !== 'discount image')
    .map((item) => ({
      id: item.media_id,
      uri: item.a_image,
      title: decode(item.a_title),
      description: decode(item.a_shortdescription),
      buttonText: 'Shop Now',
    }));

  return (
    <View style={styles.container}>
      {/* Heading Row */}
      <View style={styles.headingRow}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>{heading}</Text>
        </View>

        {badge && <Image source={{ uri: badge }} style={styles.headingBadge} />}
      </View>

      {/* Cards */}
      {cards.map((item, index) => (
        <View
          key={item.id}
          style={[styles.card, index === cards.length - 1 && styles.cards]}
        >
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor1,
    marginBottom: 60,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  headingWrapper: {
    flexShrink: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontFamily: fonts.EBGaramondRegular,
    fontWeight: '600',
    color: colors.grayColor22,
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 35,
  },
  headingBadge: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  card: {
    width: '100%',
    backgroundColor: colors.whiteColor1,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  cards: {
    marginBottom: 0,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4.5 / 3,
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
    fontFamily: fonts.EBGaramondRegular,
    fontWeight: '600',
    color: colors.grayColor22,
    textAlign: 'center',
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor22,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: colors.grayColor22,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor22,
    letterSpacing: 0.5,
    fontWeight: '700',
  },
});

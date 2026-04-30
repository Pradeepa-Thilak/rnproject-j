import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function Anjumodibanner({ details }) {
  const media = details?.MediaDetails || [];

  const seq1 = media.find((m) => Number(m.a_sequence) === 1); // image
  const seq2 = media.find((m) => Number(m.a_sequence) === 2); // text

  if (!seq1 || !seq2) return null;

  return (
    <View style={styles.bannerContainer}>
      <Image source={{ uri: seq1.a_image }} style={styles.bannerImage} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{getDecodeText(seq2.a_title)}</Text>

        <Text style={styles.desc}>{getDecodeText(seq2.a_description)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    backgroundColor: colors.whiteColor1,
  },

  bannerImage: {
    width: 200,
    aspectRatio: 0.71,
  },

  textContainer: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    color: colors.grayColor21,
    fontFamily: fonts.LatoBold,
    fontWeight: '600',
    marginBottom: 6,
    letterSpacing: 1,
  },

  desc: {
    fontSize: 15,
    color: colors.grayColor21,
    fontFamily: fonts.EBGaramondRegular,
    marginTop: 10,
    lineHeight: 20,
  },
});

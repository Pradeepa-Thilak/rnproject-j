import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { decode } from 'html-entities';
import fonts from '../../../../assests/fonts';
export default function Anjumodibanner({ details }) {
  const media = details?.MediaDetails || [];

  // 🔥 sequence mapping
  const seq1 = media.find((m) => Number(m.a_sequence) === 1); // image
  const seq2 = media.find((m) => Number(m.a_sequence) === 2); // text

  if (!seq1 || !seq2) return null;

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
    <View style={styles.bannerContainer}>
      {/* 🔥 IMAGE */}
      <Image source={{ uri: seq1.a_image }} style={styles.bannerImage} />

      {/* 🔥 TEXT */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{decodeText(seq2.a_title)}</Text>

        <Text style={styles.desc}>{decodeText(seq2.a_description)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fbf4e7',
  },

  bannerImage: {
    width: 150,
    aspectRatio: 0.85,
  },

  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },

  title: {
    fontSize: 12,
    color: '#292929',
    fontFamily: fonts.LatoBold,
    fontWeight: '600',
  },

  desc: {
    fontSize: 10,
    color: '#292929',
    fontFamily: fonts.EBGaramondRegular,
    marginTop: 10,
  },
});

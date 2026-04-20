import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { React } from 'react';
import GridImages from '../Gridimages';
import { decode } from 'html-entities';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function Popgiftcategory({ details }) {
  const data = details?.MediaDetails || [];

  if (!data.length) return null;

  const bgImage = data.find((item) => item.a_media_type === 'BackgroundImage');

  const textItems = data.filter((item) => item.a_media_type === 'Text');

  const heading = textItems[0]?.a_title;
  const description =
    textItems[1]?.a_description || textItems[0]?.a_description;

  const images = data
    .filter((item) => item.a_media_type === 'Image' && item.a_image)
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
    .map((item) => item.a_image);

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
    <ImageBackground
      source={{ uri: bgImage?.a_image }}
      style={styles.bg}
      resizeMode="contain"
    >
      <View style={styles.categorycon}>
        {heading ? (
          <Text style={styles.heading}>{decodeText(heading)}</Text>
        ) : null}

        {description ? (
          <View style={styles.description}>
            <Text style={styles.para}>{decodeText(description)}</Text>
          </View>
        ) : null}

        <View style={styles.category}>
          <GridImages
            data={images}
            spacing={20}
            imageStyle={styles.GridImages}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  categorycon: {
    paddingVertical: 70,
    alignItems: 'center',
  },
  description: {
    maxWidth: 350,
  },
  GridImages: {
    width: '100%',
    aspectRatio: 4 / 5,
  },
  heading: {
    color: colors.grayColor25,
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 22,
    marginBottom: 10,
  },
  para: {
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 14,
    marginBottom: 40,
    textAlign: 'center',
  },
  category: {
    paddingHorizontal: 30,
  },
  bg: {
    width: '100%',
    aspectRatio: 9 / 26,
    paddingVertical: 20,
  },
});

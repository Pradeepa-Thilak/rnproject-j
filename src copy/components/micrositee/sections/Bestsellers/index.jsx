import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import fonts from '../../../../assests/fonts';
import { React } from 'react';
import GridImages from '../Gridimages';
import { decode } from 'html-entities';

export default function Bestsellers({
  details,
  imgbgstyle,
  titleimgstyle,
  categorytopimgstyle,
  categoryconstyle,
  parastyle,
  bgImage,
}) {
  const media = details?.MediaDetails || [];
  if (!media.length) return null;

  const imageItems = media.filter((item) => item.a_media_type === 'Image');

  const textData = media.find((item) => item.a_media_type === 'Text');

  const titleImage = imageItems.find((item) => String(item.a_sequence) === '0');

  const topimage = imageItems.find((item) => String(item.a_sequence) === '1');

  const categoryImages = imageItems
    .filter((item) => !['0', '1'].includes(String(item.a_sequence)))
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

  const category = categoryImages.map((item) => item.a_image);

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
    <View style={styles.Image}>
      <ImageBackground
        source={{ uri: bgImage?.a_image }}
        style={imgbgstyle}
        resizeMode="cover"
      />

      <View style={categoryconstyle}>
        <Image source={{ uri: titleImage?.a_image }} style={titleimgstyle} />

        <View style={styles.Text}>
          <Text style={[styles.para, parastyle]}>
            {decodeText(textData?.a_description)}
          </Text>
        </View>
      </View>

      <View style={styles.category}>
        <Image
          source={{ uri: topimage?.a_image }}
          style={categorytopimgstyle}
        />

        <GridImages
          style={styles.GridImages}
          data={category}
          spacing={20}
          itemWidth="48.5%"
          imageStyle={styles.ImageStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  para: {
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 14,
    lineHeight: 18,
    maxWidth: 300,
    textAlign: 'center',
  },
  GridImages: {
    marginTop: 20,
  },
  ImageStyle: {
    width: '100%',
    aspectRatio: 80 / 81,
  },
  Image: {
    paddingVertical: 50,
  },
  Text: {
    maxWidth: 280,
    alignItems: 'center',
  },
  category: {
    paddingHorizontal: 30,
  },
});

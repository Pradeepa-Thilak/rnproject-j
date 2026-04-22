import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { decode } from 'html-entities';

import GridImages from '../Gridimages';
import colors from '../../../../assests/colors';
export default function Shopbyprice({ details, titleimgstyle, transformData }) {
  const images = details?.MediaDetails || [];

  if (!images.length) return null;

  const titleImage = images
    .filter((item) => item.a_media_type === 'Image')
    .find((item) => String(item.a_sequence) === '0');

  const categoryImages = images.filter(
    (item) => String(item.a_sequence) !== '0',
  );
  console.log('title image', titleImage);

  const category = transformData
    ? transformData(categoryImages)
    : categoryImages.map((item) => ({
        image: item.a_image,
        title: decode(item.a_title)?.toUpperCase(),
      }));
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={{ uri: titleImage.a_image }} style={titleimgstyle} />
        <View></View>
      </View>
      <View style={styles.imagecon}>
        <GridImages
          data={category}
          spacing={20}
          itemWidth="47%"
          imageStyle={styles.GridImages}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creamColor6,
    paddingBottom: 30,
  },
  GridImages: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  imagecon: {
    paddingHorizontal: 30,
  },
});

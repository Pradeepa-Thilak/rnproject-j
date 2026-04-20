import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function Category({ details, imageStyle }) {
  const data = details?.MediaDetails || [];

  if (!data.length) return null;

  const bgImage = data.find((item) => item.a_media_type === 'BackgroundImage');

  const headingText = data.find((item) => item.a_media_type === 'Text');

  const categories = data
    .filter((item) => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
    .slice(0, 4);
  return (
    <View style={styles.category}>
      {/* Background */}
      {bgImage?.a_image ? (
        <Image
          source={{ uri: bgImage.a_image }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      ) : null}

      <View style={styles.categorycon}>
        {headingText?.a_title ? (
          <Text style={styles.heading}>{headingText.a_title}</Text>
        ) : null}

        <View style={styles.categories}>
          {categories.map((item, index) => (
            <Pressable
              key={index}
              style={[
                styles.item,
                index === categories.length - 1 && styles.catPress,
              ]}
            >
              <Image source={{ uri: item.a_image }} style={imageStyle} />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    position: 'relative',
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  categorycon: {
    paddingTop: 30,
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1080 / 329,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  catPress: {
    marginBottom: 0,
  },
  heading: {
    color: colors.grayColor25,
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 26,
    textAlign: 'center',
  },
  categories: {
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
  item: {
    marginBottom: 20,
  },
});

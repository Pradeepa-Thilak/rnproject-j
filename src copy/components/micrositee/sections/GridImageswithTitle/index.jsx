import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function GridImageswithTitle({
  details,
  imageStyle,
  showTitle = true,
  SectionName = true,
}) {
  const sectionName = details?.a_section_name;
  const media = details?.MediaDetails || [];
  if (!media.length) return null;
  const heading = media.find((item) => item.a_media_type === 'Text')?.a_title;
  const data = media.filter((item) => item.a_media_type === 'Image');

  return (
    <View style={styles.container}>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      {SectionName && sectionName && (
        <Text style={styles.sectionName}>{sectionName}</Text>
      )}
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
          <View style={styles.renderItem}>
            <Image source={{ uri: item.a_image }} style={imageStyle} />
            <View>
              {showTitle && item.a_title && (
                <Text style={styles.label}>{item.a_title}</Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  renderItem: {
    width: '48%',
    marginBottom: 20,
  },

  heading: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: fonts.EBGaramondRegular,
    color: colors.grayColor22,
    letterSpacing: 0.5,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: colors.brownColor11,
    fontWeight: '700',
    fontFamily: fonts.LatoRegular,
    textDecorationLine: 'underline',
  },
  sectionName: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.grayColor22,
    marginBottom: 14,
    fontFamily: fonts.LatoRegular,
    letterSpacing: 1,
  },
});

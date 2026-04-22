import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import fonts from '../../../../assests/fonts';
export default function GridImageswithTitle({
  details,
  imageStyle,
  showTitle = true,
  SectionName = true,
}) {
  const sectionName = details?.a_section_name;
  const media = details?.MediaDetails || [];
  if (!media.length) return null;
  // 🔥 Heading from API
  const heading = media.find((item) => item.a_media_type === 'Text')?.a_title;
  // 🔥 Images from API
  const data = media.filter((item) => item.a_media_type === 'Image');

  return (
    <View style={styles.container}>
      {/* 🔥 HEADING */}
      {heading && <Text style={styles.heading}>{heading}</Text>}
      {SectionName && sectionName && (
        <Text style={styles.sectionName}>{sectionName}</Text>
      )}
      {/* 🔥 GRID */}
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
    paddingHorizontal: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  renderItem: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: fonts.EBGaramondRegular,
    color: '#212121',
    letterSpacing: 0.5,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#BB1425',
    fontWeight: 700,
    fontFamily: fonts.LatoRegular,
    textDecorationLine: 'underline',
  },
  sectionName: {
    fontSize: 16,
    textAlign: 'center',
    color: '#212121',
    marginBottom: 14,
    fontFamily: fonts.LatoRegular,
    letterSpacing: 1,
  },
});

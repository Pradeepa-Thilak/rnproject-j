import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet
} from "react-native";
export default function GridImageswithTitle({
  details,
  style,
  imageStyle,
  spacing = 20,
  itemWidth = "48.5%",
  showTitle = true,
  SectionName = true
}) {
    const sectionName = details?.a_section_name;
  const media = details?.MediaDetails || [];
  if (!media.length) return null;
  // 🔥 Heading from API
  const heading = media.find(
    item => item.a_media_type === "Text"
  )?.a_title;
  // 🔥 Images from API
  const data = media
    .filter(item => item.a_media_type === "Image")
    
  return (
    <View style={[ {
      paddingHorizontal: 20,},style]}>
      {/* 🔥 HEADING */}
      {heading && (
        <Text style={styles.heading}>
          {heading}
        </Text>
      )}
      {SectionName && sectionName && (
        <Text style={styles.sectionName}>
          {sectionName}
        </Text>
      )}
      {/* 🔥 GRID */}
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              width: itemWidth,
              marginBottom: spacing,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.a_image}}
              style={imageStyle}
            />
            <View>
            {showTitle && item.a_title && (
            <Text style={styles.label}>
                {item.a_title}
            </Text>
            )}    
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "EBGaramond-Regular",
    color: "#212121",
    letterSpacing: 0.5,
  },
  label: {
  marginTop: 8,
  fontSize: 14,
  textAlign: "center",
  color: "#BB1425",
  fontWeight: 700,
  fontFamily: "Lato-Regular",
  textDecorationLine: "underline"
},
sectionName: {
  fontSize: 16,
  textAlign: "center",
  color: "#212121",
  marginBottom: 14,
  fontFamily: "Lato-Regular",
  letterSpacing: 1,
},
});
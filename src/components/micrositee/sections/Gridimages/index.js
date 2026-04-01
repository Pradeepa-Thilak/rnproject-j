import React from "react";
import { View, FlatList, Image,Text,StyleSheet } from "react-native";

export default function GridImages({
  data = [],
   style,
  imageStyle,
  spacing = 20,
  itemWidth = "48.5%"
}) {
  return (
    <FlatList
    style={style}
      data={data}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
     renderItem={({ item }) => {
        console.log("GRID ITEM:", item);
  const imageUri = typeof item === "string" ? item : item.image;

  return (
    <View
      style={{
        width: itemWidth,
        marginBottom: spacing,
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: imageUri }}
        style={imageStyle}
      />

      {item.title && (
        <Text style={styles.label}>
          {item.title}
        </Text>
      )}
    </View>
  );
}}
    />
  );
}

const styles=StyleSheet.create({
    label: {
   paddingVertical:20,
    fontSize: 16,
      textAlign:"center",
    textDecorationLine: "underline",
    fontFamily:"Lato-Regular",
    textTransform:"uppercase",
    width:"90%"
    
  },
})
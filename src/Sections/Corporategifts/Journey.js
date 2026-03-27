import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const Journey = ({ data }) => {
  const items = data?.MediaDetails || [];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Journey with Us</Text>
      <Text style={styles.subText}>
        Discover India's Most Beautiful Products and Their Unique Stories
      </Text>
      {items.map((item, index) => {
        if (!item?.a_image) return null;
        return (
          <View key={index} style={styles.item}>
            <Image source={{ uri: item.a_image }} style={styles.image} />
            <Text style={styles.text}>{item.a_title}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default Journey;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#efe3cc",
  },
  heading: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },
  subText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#555",
  },
  item: {
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
});
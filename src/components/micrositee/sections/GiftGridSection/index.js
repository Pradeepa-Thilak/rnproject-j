import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { decode as atob } from "base-64";

export default function GiftGridSection({ details }) {

  const media = details?.MediaDetails || [];
  if (!media.length) return null;

  // 🔥 TEXT (seq 0)
  const textItem = media.find(
    item => item.a_media_type === "Text"
  );

  // 🔥 IMAGES (seq 1+)
  const images = media
    .filter(item => item.a_media_type === "Image")
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

  return (
    <View style={styles.container}>

      {/* 🔥 HEADING */}
      {textItem?.a_title && (
        <Text style={styles.heading}>
          {textItem.a_title}
        </Text>
      )}

      {/* 🔥 SUBTEXT */}
      {textItem?.a_shortdescription && (
        <Text style={styles.subText}>
          {textItem.a_shortdescription}
        </Text>
      )}

      {/* 🔥 GRID */}
      <View style={styles.grid}>
        {images.map((item, index) => (
          <View key={item.media_id || index} style={styles.card}>

            <Image
              source={{ uri: item.a_image }}
              style={styles.image}
            />

            {/* 🔥 DESCRIPTION */}
            {item.a_shortdescription && (
              <Text style={styles.desc}>
                {item.a_shortdescription}
              </Text>
            )}

          </View>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 24,
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "EBGaramond-Regular",
    color: "#212121",
    marginBottom: 8,
  },

  subText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },

  grid: {
    flexDirection: "column",
    alignItems: "center",
  },

  card: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },

  image: {
    width: "100%",
    aspectRatio: 331 / 431,
  },

  desc: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
    color: "#616161",
    lineHeight: 16,
    maxWidth: 300, 
  },

});
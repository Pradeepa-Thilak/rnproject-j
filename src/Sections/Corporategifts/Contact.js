import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Contact = ({ data }) => {
  const item = data?.MediaDetails?.find((i) =>
    i?.a_title?.toLowerCase().includes("get in touch")
  );
  if (!item) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{item.a_title}</Text>
      <Text style={styles.subText}>
        {item.a_shortdescription}
      </Text>
      <Text style={styles.email}>b2b@jaypore.com</Text>
      <Text style={styles.phone}>Ph: (+91) 8087549632</Text>
    </View>
  );
};
export default Contact;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f1ea",
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
  email: {
    textAlign: "center",
    fontWeight: "bold",
  },
  phone: {
    textAlign: "center",
    marginTop: 5,
  },
});
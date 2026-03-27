import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
const Form = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email-ID" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} />
      <TextInput
        placeholder="Message"
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Form;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f1ea",
  },
  input: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#999",
    padding: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
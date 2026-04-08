import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { decode as atob } from 'base-64';
const JourneySection = ({ section }) => {
  const items = section?.MediaDetails || [];
  // ✅ TEXT ITEM (API)
  const textItem = items.find(
    item => item.a_media_type === 'Text'
  );
  // ✅ IMAGE ITEMS (API)
  const imageItems = items
    .filter(item => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));
  const description = textItem?.a_description
    ? atob(textItem.a_description)
    : '';
  return (
    <View style={styles.container}>
      {/* 🔹 GET IN TOUCH SECTION */}
      <Text style={styles.heading}>
        Get In Touch With Us
      </Text>
      <Text style={styles.desc}>
        We will be happy to assist you with your queries.
        Please feel free to contact us via email at:
      </Text>
      <Text style={styles.email}>b2b@jaypore.com</Text>
      <Text style={styles.phone}>Ph: (+91) 8087549632</Text>
      {/* 🔹 FORM */}
      <View style={{ marginTop: 15 }}>
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
      {/* 🔹 JOURNEY TITLE FROM API */}
      <Text style={[styles.heading, { marginTop: 30 }]}>
        {textItem?.a_title}
      </Text>
      {/* 🔹 JOURNEY DESCRIPTION FROM API */}
      <Text style={styles.desc}>
        {description}
      </Text>
      {/* 🔹 JOURNEY ITEMS FROM API */}
      <View style={{ marginTop: 20 }}>
        {imageItems.map((item, i) => (
          <View key={i} style={styles.column}>
            <Image
              source={{ uri: item.a_image }}
              style={styles.icon}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>
                {item.a_title}
              </Text>
              <Text style={styles.sub}>
                {item.a_shortdescription}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default JourneySection;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f1ea',
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
    color: '#212121',
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  email: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  phone: {
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#999',
    padding: 15,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 110,
    height: 100,
    marginRight: 15,
  },
  title: {
    fontSize: 14,
    alignItems: 'center',
    fontWeight: '600',
  },
  sub: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});
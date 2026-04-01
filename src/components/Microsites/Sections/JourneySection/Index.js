import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const JourneySection = ({ section }) => {
  const items = section?.MediaDetails || [];
  const contact = items.find(i =>
    i?.a_title?.toLowerCase().includes('get in touch')
  );
  return (
    <View style={styles.sectionBox}>
      {/* CONTACT */}
      {contact && (
        <>
          <Text style={styles.heading}>{contact.a_title}</Text>
          <Text style={styles.subText}>
            {contact.a_shortdescription}
          </Text>
          <Text style={styles.email}>
            b2b@jaypore.com
          </Text>
          <Text style={styles.phone}>
            Ph: (+91) 8087549632
          </Text>
        </>
      )}
      {/* FORM */}
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
      {/* JOURNEY */}
      <View style={{ marginTop: 20 }}>
        {items.map((item, i) => {
          if (!item?.a_image) return null;
          return (
            <View key={i} style={styles.journeyItem}>
              <Image
                source={{ uri: item.a_image }}
                style={styles.journeyImage}
              />
              <Text style={styles.journeyText}>
                {item.a_title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default JourneySection;
const styles = StyleSheet.create({
  sectionBox: {
    padding: 20,
    backgroundColor: '#f5f1ea',
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
  },
  subText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#555',
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
  journeyItem: {
    alignItems: 'center',
    marginTop: 10,
  },
  journeyImage: {
    width: 80,
    height: 80,
  },
  journeyText: {
    marginTop: 5,
    textAlign: 'center',
  },
});
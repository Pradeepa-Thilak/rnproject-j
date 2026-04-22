import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import fonts from '../../assests/fonts';
import { useAuth } from '../../context/AuthContext';
import Footer from '../../components/Footer';
const MyInformation = () => {
  const { user } = useAuth();
  const [state, setState] = useState(INITIAL_STATE);
  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No user data found</Text>
      </View>
    );
  }
  const INITIAL_STATE = {
    title: 'Mr',
    name: user?.firstName || '',
  };
  const update = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Title Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleBtn, state.title === 'Mr' && styles.activeBtn]}
            onPress={() => update('title', 'Mr')}
          >
            <Text
              style={[
                styles.toggleText,
                state.title === 'Mr' && styles.activeText,
              ]}
            >
              Mr.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, state.title === 'Ms' && styles.activeBtn]}
            onPress={() => update('title', 'Ms')}
          >
            <Text
              style={[
                styles.toggleText,
                state.title === 'Ms' && styles.activeText,
              ]}
            >
              Ms.
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={[styles.input, styles.nameInput]}
          value={state.name}
          onChangeText={(v) => update('name', v)}
        />
        <Text style={styles.label}>Mobile No *</Text>
        <TextInput style={styles.input} value={user.mobile} editable={false} />
        <Text style={styles.label}>Email *</Text>
        <TextInput style={styles.input} value={user.email} editable={false} />
        <Text style={styles.label}>Date Of Birth</Text>
        <TextInput style={styles.input} value={user.dob} editable={false} />
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};
export default MyInformation;
const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activeBtn: {
    backgroundColor: '#bb4425',
    borderColor: '#bb4425',
  },
  toggleText: {
    color: '#333',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: fonts.LatoBold,
    color: '#212121',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 5,
    backgroundColor: '#eaeaea',
    fontFamily: fonts.LatoRegular,
  },
  nameInput: {
    backgroundColor: '#fff',
  },
  saveBtn: {
    marginTop: 30,
    backgroundColor: '#bb4425',
    height: 45,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: fonts.LatoBold,
  },
});

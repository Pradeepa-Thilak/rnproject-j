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
import colors from '../../assests/colors';
import { useAuth } from '../../context/AuthContext';
import Footer from '../../components/Footer';
const MyInformation = () => {
  const { user } = useAuth();
  const INITIAL_STATE = {
    title: 'Mr',
    name: user?.firstName || '',
  };
  const [state, setState] = useState(INITIAL_STATE);
  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No user data found</Text>
      </View>
    );
  }
  const update = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
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
    backgroundColor: colors.whiteColor1,
  },
  container: {
    padding: 20,
    backgroundColor: colors.whiteColor1,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleBtn: {
    borderWidth: 1,
    borderColor: colors.grayColor6,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activeBtn: {
    backgroundColor: colors.brownColor7,
    borderColor: colors.brownColor7,
  },
  toggleText: {
    color: colors.grayColor26,
  },
  activeText: {
    color: colors.whiteColor1,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: fonts.LatoBold,
    color: colors.grayColor22,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grayColor6,
    padding: 15,
    marginTop: 5,
    backgroundColor: colors.grayColor3,
    fontFamily: fonts.LatoRegular,
  },
  nameInput: {
    backgroundColor: colors.whiteColor1,
  },
  saveBtn: {
    marginTop: 30,
    backgroundColor: colors.brownColor7,
    height: 45,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  saveText: {
    color: colors.whiteColor1,
    fontWeight: 'bold',
    fontFamily: fonts.LatoBold,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocateStore = () => {
  return (
    <View style={styles.first}>
      <Text style={styles.text}>Locate Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    textTransform: 'uppercase',
  },
});

export default LocateStore;

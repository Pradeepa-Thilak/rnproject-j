import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreLocator = () => {
  return (
    <View style={styles.first}>
      <Text style={styles.text}>Store Locator</Text>
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

export default StoreLocator;

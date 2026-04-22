import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fonts from '../../assests/fonts';
const Login = () => {
  return (
    <View style={styles.first}>
      <Text style={styles.text}>Login</Text>
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
    fontFamily: fonts.LatoRegular,
    fontSize: 25,
    textTransform: 'uppercase',
  },
});
export default Login;

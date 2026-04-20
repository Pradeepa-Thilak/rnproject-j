import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import fonts from '../assests/fonts';
import colors from '../assests/colors';
export default function Pdpbuttons() {
  return (
    <View style={styles.btncon}>
      <Pressable style={styles.btn1}>
        <Text style={styles.btn1txt}>Add to cart</Text>
      </Pressable>
      <Pressable style={styles.btn2}>
        <Text style={styles.btn2txt}>Buy now </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btncon: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: 'white',

    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  btn1: {
    width: '48%',
    height: 48,

    borderWidth: 1,
    borderColor: colors.brownColor2,
    borderRadius: 4,
    justifyContent: 'center',
  },
  btn1txt: {
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.brownColor2,
    fontSize: 16,
  },

  btn2: {
    width: '48%',
    height: 48,

    backgroundColor: colors.brownColor2,
    borderRadius: 4,
    justifyContent: 'center',
  },
  btn2txt: {
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.whiteColor1,
  },
});

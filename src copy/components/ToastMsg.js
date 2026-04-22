import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import fonts from '../assests/fonts';
const ToastMsg = ({ visible, message }) => {
  const toastRef = useRef(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      // toast.setValue(0);
      Animated.timing(toastRef, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(toastRef, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toast, { opacity: toastRef }]}>
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignContent: 'center',
    paddingHorizontal: 33,
    paddingVertical: 7,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 10,
    zIndex: 999,
  },
  toastText: {
    color: '#fff',
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    letterSpacing: 0.3,
  },
});

export default ToastMsg;

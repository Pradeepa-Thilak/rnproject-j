import React, { useEffect } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import fonts from '../assests/fonts';
import colors from '../assests/colors';
const ToastMsg = ({ visible, message }) => {
  const [opacity] = React.useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(opacity, {
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
    <Animated.View style={[styles.toast, { opacity }]}>
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    width: '80%',
    backgroundColor: colors.blackOpacityColor5,
    paddingHorizontal: 33,
    alignItems: 'center',
    paddingVertical: 7,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 2,
    elevation: 10,
    zIndex: 999,
  },
  toastText: {
    color: colors.whiteColor1,
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    letterSpacing: 0.3,
  },
});

export default ToastMsg;

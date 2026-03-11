import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ToastMsg = ({ visible, message }) => {
    
    const toast = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(toast, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start();

            const timer = setTimeout(() => {
                Animated.timing(toast, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }).start();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!visible) return null;

  return (
    <Animated.View style={[styles.toast, { opacity: toast }]}>
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

    },
    toastText: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        letterSpacing: 0.3,
    }
});

export default ToastMsg;

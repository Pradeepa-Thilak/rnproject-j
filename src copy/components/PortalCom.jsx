import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Portal } from 'react-native-paper';

const PortalCom = ({ onBackdropPress, positions, children }) => {
  return (
    <Portal>
      <Pressable style={styles.backdrop} onPress={onBackdropPress}>
        <Pressable
          style={[
            styles.popup,
            {
              top: positions.y,
              left: positions.x,
            },
          ]}
          onPress={(e) => e.stopPropagation()}
        >
          {children}
        </Pressable>
      </Pressable>
    </Portal>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default PortalCom;

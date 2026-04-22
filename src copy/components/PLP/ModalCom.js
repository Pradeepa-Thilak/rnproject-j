import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

const ModalCom = ({ open, close, children, bgcolor, containerStyle }) => {
  return (
    <Modal visible={open} onRequestClose={() => close()} transparent>
      <View style={[styles.overlay, containerStyle]}>
        <View
          style={[styles.modalContent, bgcolor && { backgroundColor: bgcolor }]}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalCom;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.25)',
    marginBottom: 35,
  },

  modalContent: {
    width: '100%',
    maxHeight: '100%',
    backgroundColor: '#fff', // default fallback
  },
});

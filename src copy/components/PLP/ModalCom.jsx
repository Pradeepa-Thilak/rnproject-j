import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import colors from '../../assests/colors';
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
    backgroundColor: colors.blackOpacityColor2,
    marginBottom: 35,
  },

  modalContent: {
    width: '100%',
    maxHeight: '100%',
    backgroundColor: colors.whiteColor1, // default fallback
  },
});

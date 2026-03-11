import React from 'react';
import { View, Text, Modal } from 'react-native';

const ModalCom = ({ open, close, children, bgcolor }) => {
  return (
    <Modal visible={open} onRequestClose={() => close()} transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.25)',
          marginBottom: 35,
        }}
      >
        <View
          style={{
            backgroundColor: bgcolor,
            width: '100%',
            maxHeight: '100%',
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalCom;

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { stylesCart as styles } from '../screens/Cart/CartStyles';
import ModalCom from './PLP/ModalCom';
import SelectAddressCom from './SelectAddressCom';
import AddNewAddressForm from './AddNewAddressForm';

const AddressCom = () => {
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState('');
  console.log(modalName);
  return (
    <View style={styles.addressBox}>
      <Text style={styles.addressBox_Des}>
        Enter pincode to check delivery dates
      </Text>
      <Pressable
        style={styles.addressBox_InputBtn}
        onPress={() => {
          setModal(true);
          setModalName('address');
        }}
      >
        <Text style={styles.addressBox_InputBtn_Text}>Enter Pincode</Text>
      </Pressable>

      <ModalCom
        open={modal}
        close={setModal}
        bgcolor={'#fff'}
        maxHeight={'85%'}
        flex={modalName === 'address' ? 0 : 1}
      >
        {modalName === 'address' ? (
          <SelectAddressCom setModalName={setModalName} setModal={setModal} />
        ) : (
          <AddNewAddressForm setModal={setModal} />
        )}
      </ModalCom>
    </View>
  );
};

export default AddressCom;

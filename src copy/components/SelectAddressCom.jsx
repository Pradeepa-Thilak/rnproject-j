import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';
import { stylesCart as styles } from '../screens/Cart/CartStyles';

const SelectAddressCom = ({ setModalName, setModal }) => {
  const [focused, setFocused] = useState(false);
  const [pincode, setPincode] = useState('');

  return (
    <View>
      <View style={styles.addressModalBox}>
        <Text style={styles.addressModalBox_head}>Select Address</Text>
        {/* <SpriteIcon x={575} y={125}/> */}
        <IconButton icon={'close'} size={25} onPress={() => setModal(false)} />
      </View>
      <View style={styles.container}>
        <View style={styles.PincodeInputBox_container}>
          <Text
            pointerEvents="none"
            style={[
              styles.PincodeInputBoxLabel,
              (focused || pincode.length > 0) &&
                styles.PincodeInputBoxLabel_active,
            ]}
          >
            Pincode
          </Text>
          <TextInput
            style={styles.PincodeInputBox}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={setPincode}
          />
          <Pressable style={styles.PincodeInputBox_check_btn}>
            <Text style={styles.PincodeInputBox_check_text}>Check</Text>
          </Pressable>
        </View>
        <View style={styles.addAdressBox}>
          <Pressable
            style={styles.addAddress}
            onPress={() => setModalName('addressForm')}
          >
            <Text style={styles.addAddressText}>+ Add New Address</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SelectAddressCom;

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';
import { stylesCart as styles } from '../screens/Cart/CartStyles';

const AddNewAddressForm = ({ setModal }) => {
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({
    pincode: '',
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
    locality: '',
    landmark: '',
    state: '',
    city: '',
    saveAdd: ''
  });
  const [saveAddress, setSaveAddress] = useState('Home'); 
  const disabled = !form.pincode || !form.firstName || !form.mobile || !form.state || !form.city;

  const handleChange = (type, value) => {
    setForm(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.addressModalBox}>
        <Text style={styles.addressModalBox_head}>Add New Address</Text>
        <IconButton icon={'close'} size={25} onPress={() => setModal(false)} />
      </View>
      <ScrollView style={{ paddingHorizontal: 20, flex: 1 }}>
        <View
          style={[
            styles.PincodeInputBox_container,
            { borderBottomWidth: 0, paddingHorizontal: 0 },
          ]}
        >
          <Text
            pointerEvents="none"
            style={[
              styles.PincodeInputBoxLabel,
              (focused === 'pincode' || form.pincode.length > 0) &&
                styles.PincodeInputBoxLabel_active,
            ]}
          >
            Pincode*
          </Text>
          <TextInput
            value={form.pincode}
            style={styles.PincodeInputBox}
            onFocus={() => setFocused('pincode')}
            onBlur={() => setFocused(null)}
            onChangeText={text => handleChange('pincode', text)}
          />
        </View>
        <View style={styles.contactDetailsContainer}>
          <Text style={styles.DetailsHead}>Contact Details</Text>
          <View style={styles.contactInputContainer}>
            <View style={styles.NameInputContainer}>
              <Text
                style={[
                  styles.InputLabel,
                  (focused === 'firstName' || form.firstName.length > 0) &&
                    styles.InputLabelActive,
                ]}
              >
                First Name*
              </Text>
              <TextInput
                style={styles.InputBox}
                onFocus={() => setFocused('firstName')}
                onBlur={() => setFocused(null)}
              />
            </View>
            <View style={styles.NameInputContainer}>
              <Text style={[styles.InputLabel,
                (focused === 'lastName' || form.lastName.length > 0) &&
                styles.InputLabelActive
              ]}>Last Name</Text>
              <TextInput
                style={styles.InputBox}
                onFocus={() => setFocused('lastName')}
                onBlur={() => setFocused(null)}
              />
            </View>
          </View>
          <View style={styles.InputContainer}>
            <Text style={[styles.InputLabel,
                (focused === 'mobileNumber' || form.mobile.length > 0) &&
                styles.InputLabelActive
              ]}>Mobile Number*</Text>
            <TextInput
              style={styles.InputBox}
              onFocus={() => setFocused('mobileNumber')}
              onBlur={() => setFocused(null)}
            />
          </View>
        </View>
        <View>
          <Text style={styles.DetailsHead}>Address Details</Text>
          <View style={styles.InputContainer}>
            <Text
              style={[styles.InputLabel,
                (focused === 'address' || form.address.length > 0) &&
                styles.InputLabelActive
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Address (House no, Building, Street Name)
            </Text>
            <TextInput
              style={[styles.InputBox, { borderColor: '#bb4225' }]}
              onFocus={() => setFocused('address')}
              onBlur={() => setFocused(null)}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={[styles.InputLabel,
                (focused === 'locality' || form.locality.length > 0) &&
                styles.InputLabelActive
              ]}>
              Locality/Town (Area,locality,town)
            </Text>
            <TextInput
              style={[styles.InputBox, { borderColor: '#bb4225' }]}
              onFocus={() => setFocused('locality')}
              onBlur={() => setFocused(null)}
            />
          </View>
          <View style={styles.InputContainer}>
            <Text style={[styles.InputLabel,
                (focused === 'landmark' || form.landmark.length > 0) &&
                styles.InputLabelActive
              ]}>Landmark(optional)</Text>
            <TextInput
              style={[styles.InputBox, { borderColor: '#bb4225' }]}
              onFocus={() => setFocused('landmark')}
              onBlur={() => setFocused(null)}
            />
          </View>
          <View style={styles.contactInputContainer}>
            <View style={styles.NameInputContainer}>
              <Text style={[styles.InputLabel,
                (focused === 'state' || form.lastName.length > 0) &&
                styles.InputLabelActive
              ]}>State*</Text>
              <TextInput
                style={[styles.InputBox, { borderColor: '#bb4225' }]}
                onFocus={() => setFocused('state')}
                onBlur={() => setFocused(null)}
              />
            </View>
            <View style={styles.NameInputContainer}>
              <Text style={[styles.InputLabel,
                (focused === 'city' || form.lastName.length > 0) &&
                styles.InputLabelActive
              ]}>City*</Text>
              <TextInput
                style={[styles.InputBox, { borderColor: '#bb4225' }]}
                onFocus={() => setFocused(city)}
                onBlur={() => setFocused(null)}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.DetailsHead}>Save Address*</Text>
          <View style={styles.flex}>
            <Pressable style={[styles.SaveAddressBtn,
              saveAddress==='Home' && {backgroundColor: '#bb4225'}
            ]} onPress={() => setSaveAddress('Home')}>
              <Text style={[styles.SaveAddressBtnText,
                saveAddress==='Home' && {color: '#fff'}
              ]} >Home</Text>
            </Pressable>
            <Pressable style={[styles.SaveAddressBtn,
              saveAddress==='Office' && {backgroundColor: '#bb4225'}
            ]} onPress={() => setSaveAddress('Office')}>
              <Text style={[styles.SaveAddressBtnText,
                saveAddress==='Office' && {color: '#fff'}
              ]}>Office</Text>
            </Pressable>
            <Pressable style={[styles.SaveAddressBtn,
              saveAddress==='Others' && {backgroundColor: '#bb4225'}
            ]} onPress={() => setSaveAddress('Others')}>
              <Text style={[styles.SaveAddressBtnText,
                saveAddress==='Others' && {color: '#fff'}
              ]}>Others</Text>
            </Pressable>
          </View>
            {saveAddress === 'Others' && (
              <View style={styles.InputContainer}>
                <Text style={[styles.InputLabel, 
                  (focused==='saveAdd' || form.saveAdd.length > 0) && styles.InputLabelActive
                ]}>Save Address*</Text>
                <TextInput
                  style={[styles.InputBox, {borderColor: '#bb4225'}]}
                  onFocus={() => setFocused('saveAdd')}
                  onBlur={() => setFocused(nu)}
                />
              </View>
              )}
          <View
            style={[
              styles.flex,
              { justifyContent: 'flex-start', alignItems: 'center' },
            ]}
          >
            <Checkbox
              status="unchecked"
              color="#bb4225"
              uncheckedColor="#bb4225"
            />
            <Text style={styles.DefaultAddress}>
              Make this my default Address
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <View style={styles.AddressBottomContain}>
          <Pressable style={[styles.AddressSaveBtn , disabled && {backgroundColor: '#ccc'}]} disabled={disabled}>
            <Text style={styles.AddressSaveBtnText}>Save Address</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AddNewAddressForm;

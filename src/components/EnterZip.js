import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const PINCODE_DATA = {
  '600001': { serviceable: true, city: 'Chennai', state: 'Tamil Nadu', country: 'India' },
  '641001': { serviceable: true, city: 'Coimbatore', state: 'Tamil Nadu', country: 'India' },
  '560001': { serviceable: true, city: 'Bangalore', state: 'Karnataka', country: 'India' },
  '999999': { serviceable: false },
};
export default function EnterZip() {
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const route = useRoute();
  const editData = route.params?.editData;
  const editIndex = route.params?.index;
  const [serviceMsg, setServiceMsg] = useState('');
  const [formData, setFormData] = useState({
    zip: '',
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    address3: '',
    landmark: '',
    city: '',
    state: '',
    country: '',
    phone: '9876543210',
    alias: '',
    isDefault: false,
  });
  const [showform, setShowform] = useState(false);
  const [zip, setZip] = useState('');
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    const data = PINCODE_DATA[zip];
    if (!data) {
      setShowform(false);
      setServiceMsg('Pincode is not serviceable');
      return;
    }
    if (data.serviceable) {
      setShowform(true);
      setServiceMsg('Pincode is serviceable');
      setFormData(prev => ({
        ...prev,
        city: data.city || '',
        state: data.state || '',
        country: data.country || '',
        zip: zip,
      }));
    } else {
      setShowform(false);
      setServiceMsg('Pincode is not serviceable');
    }
  };
  useEffect(() => {
    if (editData) {
      setFormData(prev => ({ ...prev, ...editData }));
      setZip(editData.zip || '');
      setShowform(true);
    }
  }, [editData]);
  const isFormValid =
    formData.firstname &&
    formData.lastname &&
    formData.address1 &&
    formData.city &&
    formData.state &&
    formData.country &&
    formData.phone &&
    formData.alias &&
    formData.zip;
  return (
    <View>
      <ScrollView>
        <View style={[
          styles.maincon,
          showform ? { minHeight: screenHeight } : { height: screenHeight },
        ]}>
          <Text style={styles.headtxt}>Zip/Postal Code</Text>
          <View style={styles.inputcheckbox}>
            <TextInput
              style={styles.input}
              placeholder="Enter Zipcode"
              value={zip}
              onChangeText={text => {
                setZip(text);
                setFormData(prev => ({ ...prev, zip: text }));
              }}
              keyboardType="numeric"
            />
            <Pressable
              style={[
                styles.checkBtn,
                { backgroundColor: zip.length > 5 ? '#bb4425' : 'rgba(0,0,0,.3)' },
              ]}
              onPress={handleCheck}
            >
              <Text style={styles.checkTxt}>Check</Text>
            </Pressable>
          </View>
          {serviceMsg !== '' && (
            <Text style={{ fontSize: 12, fontFamily: 'Lato-Regular' }}>
              {serviceMsg}
            </Text>
          )}
          {showform && (
            <View style={styles.formContainer}>
              <View style={styles.badge}>
                <Text style={styles.badgetxt}>
                  Delivery in Estimated product delivery within 7 business days
                </Text>
              </View>
              <Text style={styles.label}>First Name *</Text>
              <TextInput style={styles.inputbox} placeholder="Enter First Name"
                value={formData.firstname}
                onChangeText={text => setFormData(prev => ({ ...prev, firstname: text }))} />
              <Text style={styles.label}>Last Name *</Text>
              <TextInput style={styles.inputbox} placeholder="Enter Last Name"
                value={formData.lastname}
                onChangeText={text => setFormData(prev => ({ ...prev, lastname: text }))} />
              <Text style={styles.label}>Address Line 1 *</Text>
              <TextInput style={styles.inputbox} placeholder="Enter Address Line 1"
                value={formData.address1}
                onChangeText={text => setFormData(prev => ({ ...prev, address1: text }))} />
              <Text style={styles.label}>Address Line 2</Text>
              <TextInput style={styles.inputbox} placeholder="Enter Address Line 2"
                value={formData.address2}
                onChangeText={text => setFormData(prev => ({ ...prev, address2: text }))} />
              <Text style={styles.label}>Address Line 3</Text>
              <TextInput style={styles.inputbox} placeholder="Enter Address Line 3"
                value={formData.address3}
                onChangeText={text => setFormData(prev => ({ ...prev, address3: text }))} />
              <Text style={styles.label}>Address (Landmark)</Text>
              <TextInput style={styles.inputbox} placeholder="Enter Address (Landmark)"
                value={formData.landmark}
                onChangeText={text => setFormData(prev => ({ ...prev, landmark: text }))} />
              <Text style={styles.label}>Country *</Text>
              <TextInput style={styles.inputbox} value={formData.country}
                editable={false} placeholder="Enter Country" />
              <Text style={styles.label}>City *</Text>
              <TextInput style={styles.inputbox} value={formData.city}
                editable={false} placeholder="Enter City" />
              <Text style={styles.label}>State *</Text>
              <TextInput style={styles.inputbox} value={formData.state}
                editable={false} placeholder="Enter State" />
              <Text style={styles.label}>Phone *</Text>
              <TextInput style={styles.inputbox} value={formData.phone}
                onChangeText={text => setFormData(prev => ({ ...prev, phone: text }))}
                keyboardType="numeric" placeholder="Enter Phone" />
              <Text style={styles.label}>Save Address as *</Text>
              <TextInput style={styles.inputbox} value={formData.alias}
                onChangeText={text => setFormData(prev => ({ ...prev, alias: text }))}
                placeholder="Enter Alias" />
              <View style={styles.checkboxRow}>
                <Pressable
                  style={styles.checkbox}
                  onPress={() => {
                    setChecked(!checked);
                    setFormData(prev => ({ ...prev, isDefault: !checked }));
                  }}
                >
                  {checked && <View style={styles.tick} />}
                </Pressable>
                <Text style={styles.checkboxText}>Make this my default address</Text>
              </View>
            </View>
          )}
        </View>
        <Footer />
      </ScrollView>
      <View style={styles.fixedBtnContainer}>
        <Pressable
          style={[
            styles.btn1,
            { backgroundColor: isFormValid ? '#bb4425' : 'black', opacity: isFormValid ? 1 : 0.85 },
          ]}
          disabled={!isFormValid}
          onPress={() => {
            navigation.navigate('MyAddress', {
              newAddress: formData,
              index: editIndex,
            });
          }}
        >
          <Text style={styles.btn1txt}>Save Address</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincon: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  headtxt: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    paddingVertical: 5,
    color: '#616161',
    fontSize: 14,
  },
  inputcheckbox: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 3,
    borderWidth: 2,
    borderColor: '#e8c1a8',
    height: 44,
    paddingVertical: 5,
    paddingRight: 30,
    paddingLeft: 10,
  },
  checkBtn: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
  },
  checkTxt: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  badge: {
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    backgroundColor: '#f9eddf',
    width: '100%',
    padding: 10,
  },
  badgetxt: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  label: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#616161',
    fontWeight: '700',
    paddingVertical: 5,
  },
  inputbox: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    marginTop: 5,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 4,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    width: 10,
    height: 10,
    backgroundColor: '#bb4425',
  },
  checkboxText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#616161',
    fontWeight: '400',
  },
  fixedBtnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  btn1: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1txt: {
    fontFamily: 'Lato-Regular',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
  formContainer: {
    width: '100%',
    marginTop: 10,
  },
});
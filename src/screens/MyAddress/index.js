import { View, Pressable, Text, StyleSheet } from 'react-native';
import Footer from '../../components/Footer';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
export default function MyAddress() {
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const route = useRoute();
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    if (route.params?.newAddress) {
      const newAddr = route.params.newAddress;
      const index = route.params.index;
      setAddresses(prev => {
        let updated = [...prev];
        if (newAddr.isDefault) {
          updated = updated.map(item => ({ ...item, isDefault: false }));
        }
        if (index !== undefined) {
          updated[index] = newAddr;
        } else {
          updated.push(newAddr);
        }
        return updated;
      });
    }
  }, [route.params?.newAddress, route.params?.index]);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.maincon, { height: screenHeight }]}>
          {addresses.length > 0 ? (
            addresses.map((item, index) => (
              <View style={{ paddingHorizontal: 16 }} key={index}>
                <View style={styles.card}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    {item.alias ? (
                      <Text style={[{ fontWeight: '700' }, styles.text]}>{item.alias}</Text>
                    ) : null}
                    {item.isDefault && (
                      <View style={styles.defaultBadge}>
                        <Text style={styles.defaultText}>Default</Text>
                      </View>
                    )}
                  </View>
                  {item.firstname || item.lastname ? (
                    <Text style={styles.text}>{item.firstname} {item.lastname}</Text>
                  ) : null}
                  {item.address1 || item.address2 ? (
                    <Text style={styles.text}>{item.address1}, {item.address2}</Text>
                  ) : null}
                  {item.city || item.state ? (
                    <Text style={styles.text}>{item.city}, {item.state}</Text>
                  ) : null}
                  {item.country ? (
                    <Text style={styles.text}>{item.country}</Text>
                  ) : null}
                  {item.zip ? (
                    <Text style={styles.text}>{item.zip}</Text>
                  ) : null}
                  {item.phone ? (
                    <Text style={styles.text}>Mobile: {item.phone}</Text>
                  ) : null}
                  <View style={styles.btnRow}>
                    <Pressable
                      style={styles.editBtn}
                      onPress={() => navigation.navigate('EnterZip', {
                        editData: item,
                        index: index,
                      })}
                    >
                      <Text style={styles.btnText}>Edit Address</Text>
                    </Pressable>
                    <Pressable
                      style={styles.deleteBtn}
                      onPress={() => {
                        const updated = [...addresses];
                        updated.splice(index, 1);
                        setAddresses(updated);
                      }}
                    >
                      <Text style={styles.btnText}>Delete</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.mainheadtxt}>No addresses saved</Text>
          )}
        </View>
        <Footer />
      </ScrollView>
      <View style={styles.fixedBtnContainer}>
        <Pressable
          style={styles.btn1}
          onPress={() => navigation.navigate('EnterZip')}
        >
          <Text style={styles.btn1txt}>Add An Address</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincon: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  mainheadtxt: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#616161',
  },
  fixedBtnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  btn1: {
    height: 48,
    backgroundColor: '#bb4425',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1txt: {
    fontFamily: 'Lato-Regular',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
  card: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#616161',
    marginBottom: 4,
  },
  btnRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editBtn: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#bb4425',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  deleteBtn: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#bb4425',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  btnText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#bb4425',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  defaultBadge: {
    backgroundColor: '#bb4425',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  defaultText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Lato-Regular',
  },
});
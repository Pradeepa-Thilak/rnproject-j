import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import SpriteIcon from './SpriteIcon';
import { useRef, useState } from 'react';
import ModalCom from '../components/PLP/ModalCom';
import { stylesCart as styles } from '../screens/Cart/CartStyles';

export default function Coupon() {
  const [openmodal, setOpenmodal] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState('');

  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [jpApplied, setJpApplied] = useState(false);

  const handleApply = () => {
    if (!coupon.trim()) {
      setError('Please enter coupon code');
      return;
    }

    // Example validation
    if (coupon !== 'SAVE10') {
      setError('Invalid coupon code');
      return;
    }

    setError('');
    console.log('Coupon applied');
  };

  return (
    <View style={styles.couponcon}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SpriteIcon
          x={962}
          y={52}
          w={27}
          h={27}
          spriteWidth={1150} //bgsize
          spriteHeight={520}
          // scale=bgsize/orgwidth
          // spriteheight=orgheight x scale
        />
        <Text style={styles.ctxt}>Apply Coupons</Text>
      </View>
      <Pressable onPress={() => setOpenmodal(true)}>
        <SpriteIcon
          x={212}
          y={144}
          w={27}
          h={27}
          spriteWidth={1150}
          spriteHeight={521}
        />
      </Pressable>
      <ModalCom
        open={openmodal}
        close={() => setOpenmodal(false)}
        bgcolor={'white'}
      >
        <View style={styles.modalcon}>
          <View style={styles.modalHeader}>
            <Pressable onPress={() => setOpenmodal(false)}>
              <View style={{ flexDirection: 'row', gap: 7 }}>
                <SpriteIcon
                  x={922}
                  y={92}
                  w={25}
                  h={25}
                  spriteWidth={1150}
                  spriteHeight={520}
                />

                <Text style={{ fontSize: 16 }}>Coupons</Text>
              </View>
            </Pressable>

            <Pressable onPress={() => setOpenmodal(false)}>
              <SpriteIcon
                x={252}
                y={52}
                w={25}
                h={25}
                spriteWidth={1150}
                spriteHeight={520}
              />
            </Pressable>
          </View>
          <View>
            <View style={styles.innercoupon}>
              <View
                style={[
                  styles.input,
                  { paddingTop: focused || coupon.length > 0 ? 5 : 0 },
                ]}
              >
                {(focused || coupon.length > 0) && (
                  <Text style={styles.label}>Coupon Code</Text>
                )}
                {!focused && coupon.length === 0 && (
                  <Text style={styles.defaultText}>Coupon code</Text>
                )}

                <TextInput
                  placeholder={focused ? 'Enter the coupon code' : ''}
                  value={coupon}
                  onChangeText={setCoupon}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  style={styles.textinput}
                />

                <Pressable onPress={handleApply} style={styles.applybtn}>
                  <Text style={{ color: '#bb4125', fontSize: 16 }}>Apply</Text>
                </Pressable>
              </View>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          </View>
          {/* Coupon */}
          <View style={styles.newcoupon}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={styles.couponname}>
                <Text style={styles.coupontxt}> JPNEW10</Text>
              </View>
              <Pressable
                style={styles.removebtn}
                onPress={() => {
                  if (!jpApplied) {
                    setJpApplied(true);
                    setToastMsg('Coupon is successfully applied');
                    setToast(true);
                    setOpenmodal(false);

                    setTimeout(() => {
                      setToast(false);
                    }, 2000);
                  } else {
                    setJpApplied(false);
                    setToastMsg('Coupon is successfully removed');
                    setToast(true);
                    setTimeout(() => {
                      setToast(false);
                    }, 2000);
                  }
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Lato-Bold',
                    fontSize: 14,
                    textAlign: 'center',
                  }}
                >
                  {jpApplied ? 'Remove' : 'APPLY'}
                </Text>
              </Pressable>
            </View>

            <View style={{ marginVertical: 5 }}>
              <Text
                style={{
                  color: '#4caf50',
                  fontSize: 12,
                  fontFamily: 'Lato-Regular',
                }}
              >
                {' '}
                Save ₹179.00{' '}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Lato-Regular',
                color: '#8e959c',
              }}
            >
              10% Discount on 1st time User View T&C
            </Text>
          </View>
        </View>
      </ModalCom>
      <ModalCom
        open={toast}
        close={() => setToast(false)}
        bgcolor={'transparent'}
        containerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: 0,
          backgroundColor: 'transparent',
          paddingTop: 60,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            backgroundColor: '#1c1c1c',
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 4,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>{toastMsg}</Text>
        </View>
      </ModalCom>
    </View>
  );
}

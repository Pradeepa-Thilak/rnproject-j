import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { sizedata } from '../lib/ConstData';
import SizeChartModal from './SizeChartModal';
import { stylesPro as styles } from '../screens/PDP/PDP_style';

export default function Sizechart({product}) {
  const [selectedSize, setSelectedSize] = useState(null);
  
  const [pincode,setPincode] = useState("")
  const [error,setError] = useState("")

const [sizeChartOpen, setSizeChartOpen] = useState(false);
  return (
    <View style={styles.scon}>
      <View style={styles.shead}>
        <Text style={styles.sheadtext}>Select Size</Text>
              <Pressable onPress={() => {
                  setSizeChartOpen(true)
                  console.log(sizeChartOpen);
        }}>
          <Text style={[{textDecorationLine:"underline"},styles.sheadtext]}>Size Chart</Text>
        </Pressable>
      </View>

      <View style={styles.sizescon}>
        {sizedata.map(item => {
          const selected = selectedSize?.id === item.id;

          return (
            <View key={item.id} style={styles.sizeItem}>
              <Pressable
                style={[styles.sbox, selected && styles.selectedBox]}
                onPress={() => setSelectedSize(item)}
              >
                <Text
                  style={[styles.sboxtext, selected && styles.selectedText]}
                >
                  {item.size}
                </Text>
              </Pressable>

              {selected && <Text style={styles.qty}>{item.quantity} Left</Text>}
            </View>
          );
        })}
      </View>
      {selectedSize && (
        <View style={styles.sizebar}>
          <View style={styles.sinnertext}>
            <Text style={styles.sinnertxt}>Bust </Text>
            <Text style={styles.sinnertxt}>{selectedSize.bust}in</Text>
          </View>
          <View style={styles.sinnertext}>
            <Text style={styles.sinnertxt}>Waist </Text>
            <Text style={styles.sinnertxt}>{selectedSize.waist}in</Text>
          </View>
          <View style={styles.sinnertext}>
            <Text style={styles.sinnertxt}>Hips </Text>
            <Text style={styles.sinnertxt}>{selectedSize.hips}in</Text>
          </View>
        </View>
      )}
      <View style={styles.delivery}>
        <Text style={{ marginBottom: 10 }}>Delivery</Text>

         <View style={styles.inputContainer}>
   <TextInput
  placeholder="Enter Pincode for Delivery Date"
  placeholderTextColor="#999"
  style={[styles.input,
    error && {backgroundColor:"#ffe8e6",borderWidth:1,borderColor:"red"}
  ]}
  value={pincode}
  onChangeText={(text)=>{
    setPincode(text)
    setError("")
  }}
  keyboardType="numeric"
  maxLength={6}
/>

   <Pressable
  style={styles.checkbtn}
  onPress={()=>{
    if(pincode.length !== 6){
      setError("Please enter a valid 6 digit pincode")
    }else{
      setError("")
      console.log("Valid pincode")
    }
  }}
>
   <Text style={styles.checkText}>Check</Text>
</Pressable>
  </View>
  {error !== "" && (
  <Text style={styles.errorText}>
    {error}
  </Text>
)}

      <View style={styles.lastline}>
        <Pressable>
          <Text style={styles.lastlinetext}>Free Shipping</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.lastlinetext}>3 days return</Text>
        </Pressable>
      </View>
      </View>

    <SizeChartModal
  open={sizeChartOpen}
        close={() => setSizeChartOpen(false)}
        product={product}
/>
    </View>
  );
}

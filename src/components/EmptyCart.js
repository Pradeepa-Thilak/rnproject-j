import React from 'react';
import { View, Text,Pressable } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { stylesCart as styles } from '../screens/Cart/CartStyles';
import { useNavigation } from '@react-navigation/native';

const EmptyCart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emptyBox}>
      <SvgUri
        width={100}
        height={100}
        uri="https://imagescdn.jaypore.com/img/app/brands/jaypore/revamp/emptybag-jp.svg"
      />
      <View>
        <Text style={styles.emptyText1}>Your bag is empty!</Text>
        <Text style={styles.emptyText2}>
          Fill it up with latest trends and great deals now!
        </Text>
      </View>
      <View style={styles.emptyBtnBox}>
        <Pressable style={styles.shopBtn} onPress={() => navigation.navigate('PLP')}>
          <Text style={styles.shopBtnText}>Start Shopping</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyCart;

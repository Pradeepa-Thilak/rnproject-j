import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SpriteIcon from './SpriteIcon';
import { stylesCart as styles } from '../screens/Cart/CartStyles';

const CartFooter = ({ totalAmnt, onViewSummary }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.CartFooter}>
        <Text style={styles.CartFooteTxt}>
          &#8377;{' '}
          {Number(totalAmnt).toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </Text>
        <Pressable style={styles.summaryRow} onPress={onViewSummary}>
          <Text style={styles.summaryText}>View Summary</Text>
          <SpriteIcon
            x={745}
            y={72}
            w={27}
            h={27}
            spriteWidth={1500}
            spriteHeight={679}
          />
        </Pressable>
      </View>
      <View style={styles.CartFooter}>
        <Pressable style={styles.CartFooterBtn}>
          <Text style={styles.CartFooterBtnText}>Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartFooter;

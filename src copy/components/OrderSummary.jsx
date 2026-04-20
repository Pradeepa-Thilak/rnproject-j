import React from 'react';
import { View, Text } from 'react-native';
import SpriteIcon from './SpriteIcon';
import { stylesCart as styles } from '../screens/Cart/CartStyles';
import { useSelector } from 'react-redux';

export default function OrderSummary({ totalValue }) {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <View style={styles.ordercon}>
      <View style={styles.oshead}>
        <Text style={styles.osheadtxt}>Order Summary</Text>
        <Text style={styles.osheadtxt}>({cart.length} items)</Text>
      </View>
      <View style={styles.osdeets}>
        <View style={styles.osdeetsitem}>
          <Text style={styles.lefttxt}>Order Value</Text>
          <Text style={styles.righttxt}>
            ₹
            {Number(totalValue.orderValue).toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View style={styles.osdeetsitem}>
          <Text style={styles.lefttxt}>Product Discount</Text>
          <Text style={styles.righttxt}>
            ₹
            {Number(totalValue.discountValue).toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View style={styles.osdeetsitem}>
          <Text style={styles.lefttxt}>Shipping Charges</Text>

          <View style={styles.rightcontainer}>
            <Text style={styles.strike}>INR 100</Text>
            <Text style={styles.free}>Free</Text>
          </View>
        </View>
        <View style={styles.total}>
          <Text style={styles.lefttxt}>Grand Total</Text>
          <Text style={styles.righttxt}>
            ₹
            {Number(totalValue.grandTotal).toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View style={styles.bottomline}>
          <Text style={styles.bottomline}>Order savings </Text>
          <Text style={styles.bottomline}>
            ₹
            {Number(totalValue.orderSaving).toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
      </View>

      <View style={styles.bottomdeets}>
        <View style={(styles.OrderSummaryContainer, styles.bottomdeetsitem)}>
          <View style={styles.OrderSummarySpriteIconContainer}>
            <SpriteIcon
              x={180}
              y={72}
              w={25}
              h={25}
              spriteWidth={1500}
              spriteHeight={679}
            />
          </View>
          <Text style={styles.bottomdeetsitemtxt}>100% Authentic Products</Text>
        </View>
        <View style={styles.bottomdeetsitem}>
          <View style={styles.OrderSummarySpriteIconContainer}>
            <SpriteIcon
              x={77}
              y={72}
              w={25}
              h={25}
              spriteWidth={1500}
              spriteHeight={679}
            />
          </View>
          <Text style={styles.bottomdeetsitemtxt}>
            Safe and secure transaction
          </Text>
        </View>

        <View
          style={(styles.OrderSummarybottomdeetborder, styles.bottomdeetsitem)}
        >
          <View style={styles.OrderSummarySpriteIconContainer}>
            <SpriteIcon
              x={129}
              y={72}
              w={25}
              h={25}
              spriteWidth={1500}
              spriteHeight={679}
            />
          </View>
          <Text style={styles.bottomdeetsitemtxt}>10 days return*</Text>
        </View>
      </View>
    </View>
  );
}

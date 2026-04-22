import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AddressCom from '../../components/AddressCom';
import EmptyCart from '../../components/EmptyCart';
import CartProductDisplay from '../../components/CartProductDisplay';
import OrderSummary from '../../components/OrderSummary';
import Coupon from '../../components/Coupon';
import Scrollablewidget from '../../components/Scrollablewidget';
import CartFooter from '../../components/CartFooter';
import { cartData } from '../../lib/CartData';
import ToastMsg from '../../components/ToastMsg';
import colors from '../../assests/colors';
import ScreenWrapper from '../../components/ScreenWrapper';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const totalValue = cart.reduce(
    (acc, item) => {
      const product = item._source;

      const price = Number(product.Price);
      const discountPercent = product.Discount?.Amount || 0;

      const discountAmnt = Math.round((discountPercent / 100) * price);

      const qty = item.quantity || 1;
      const finalPrice = price - discountAmnt;
      const savingsPrice = (price - discountAmnt) * qty;

      acc.orderValue += price * qty;
      acc.discountValue += discountAmnt * qty;
      acc.grandTotal += finalPrice * qty;
      acc.orderSaving += savingsPrice;

      return acc;
    },
    {
      orderValue: 0,
      discountValue: 0,
      grandTotal: 0,
      orderSaving: 0,
    },
  );

  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const scrollRef = useRef(null);
  const orderSummaryRef = useRef(null);

  const scrollToSummary = () => {
    orderSummaryRef.current?.measureLayout(
      scrollRef.current,
      (x, y) => {
        scrollRef.current.scrollTo({ y: y, animated: true });
      },
      (err) => console.log(err),
    );
  };
  return (
    <ScreenWrapper>
      <>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <ScrollView
              ref={scrollRef}
              style={cart.length === 0 && styles.cartlength}
            >
              <AddressCom />
              <CartProductDisplay
                cart={cart}
                setToastMsg={setToastMsg}
                setToastVisible={setToastVisible}
              />
              <Coupon />
              {cartData.map((strategy, index) => (
                <View style={styles.cartData} key={index}>
                  <Scrollablewidget
                    key={strategy.strategyMessage}
                    title={strategy.strategyMessage}
                    products={strategy.hits}
                    btnclr={colors.brownColor1}
                    btntxtcolor={colors.whiteColor1}
                  />
                </View>
              ))}
              <View ref={orderSummaryRef}>
                <OrderSummary totalValue={totalValue} />
              </View>
            </ScrollView>
            <CartFooter
              totalAmnt={totalValue.grandTotal}
              onViewSummary={scrollToSummary}
            />
          </>
        )}
        <ToastMsg visible={toastVisible} message={toastMsg} />
      </>
    </ScreenWrapper>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartlength: {
    backgroundColor: colors.whiteColor1,
  },
  cartData: {
    marginTop: 12,
  },
});

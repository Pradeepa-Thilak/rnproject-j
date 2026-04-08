import React, { useState } from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import PLP from '../screens/PLP';
import PDP from '../screens/PDP/index';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Cart from '../screens/Cart/index';
import OrderDetails from '../screens/MyOrders/OrderDetails';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import CLP from '../screens/CLPpage/index';

import Corporategifting from "../components/micrositee/corporategiftingpage"
import Dokra from "../components/micrositee/dokrapage"
import Houseofsilver from "../components/micrositee/houseofsilver"
import CorporateGifts from "../components/micrositee/corporategifts";
import SareeStore from "../components/micrositee/SareeStore";

import EossScreen from '../components/micrositee/eosspage';   
import Coastal from '../components/micrositee/coastal';
import Springsummer from "../components/micrositee/springsummer2025"
import Newarrivals from "../components/micrositee/newarrival"
import Weddingseason from "../components/micrositee/weddingseason"
import Thegiftedit from "../components/micrositee/thegifteditpage"

const Stack = createStackNavigator();

const HeaderRight = ({navigation, isLoggedIn, setModalVisible}) => {


  const wishlist = useSelector(state => state.wishlist.items);
  const cart = useSelector(state => state.cart.cartItems);

  return (
    <View style={{ flexDirection: 'row' }}>
      <IconButton icon={'magnify'} size={25} />
      <View style={{ position: 'relative' }}>
        <IconButton
          icon={'heart-outline'}
          size={25}
          onPress={() => {
            if (!isLoggedIn) {
              setModalVisible(true);
            } else {
              navigation.navigate('BottomTab', { screen: 'Wishlist' });
            }
          }}
        />
        {wishlist.length > 0 && (
          <Text style={{
            position: 'absolute',
            backgroundColor: '#bf7154',
            color: '#fff',
            borderRadius: 10,
            paddingHorizontal: 4,
            paddingVertical: 1.5,
            top: 23,
            right: 12,
            fontSize: 10,
          }}>
            {wishlist.length}
          </Text>
        )}
      </View>
      <View style={{ position: 'relative' }}>
        <IconButton
          icon={'shopping-outline'}
          size={25}
          onPress={() => navigation.navigate('Cart')}
        />
        {cart.length > 0 && (
          <Text style={{
            position: 'absolute',
            backgroundColor: '#bf7154',
            color: '#fff',
            borderRadius: 10,
            paddingHorizontal: 4,
            paddingVertical: 1.5,
            top: 23,
            right: 12,
            fontSize: 10,
          }}>
            {cart.length}
          </Text>
        )}
      </View>
    </View>
  );
};

const RootStack = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const { isLoggedIn } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: () => (

        <Pressable style={styles.headerimg} onPress={() => navigation.navigate('Home')}>
            <Image
              source={{uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/jaypore.png'}}
                style={{ height: 20, aspectRatio: 6 , marginLeft: '-20%'}}
            />
          </Pressable>

          ),
          headerLeft: () => (
            <IconButton
              icon={'chevron-left'}
              size={30}
              iconColor="#212121"
              onPress={() => {
                if (navigation.canGoBack()) navigation.goBack();
                else navigation.navigate('BottomTab', { screen: 'Home' });
              }}
            />
          ),

          headerRight: () => (
            <HeaderRight
              navigation={navigation}
              isLoggedIn={isLoggedIn}
              setModalVisible={setModalVisible}
            />
          ),
        })}>


        <Stack.Screen
          name={'BottomTab'}
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'PLP'} component={PLP} />
        <Stack.Screen name={'PDP'} component={PDP} />
        <Stack.Screen
          name={'Cart'}
          component={Cart}
          options={{
            headerTitle: () => (
              <View>
                <Text style={[styles.cartTxt, { fontSize: 20 }]}>
                  Shopping Bag{' '}
                  <Text style={{ color: '#ccc' }}>({cart.length})</Text>
                </Text>
              </View>
            ),
            headerRight: () => (
              <View style={styles.cartHead}>
                <Text style={styles.cartTxt}>Step 1  </Text>
                <Text style={[styles.cartTxt, { color: '#707070', fontFamily: 'Lato-Regular' }]}>
                  of 2
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen name={'CLP'} component={CLP} />

        <Stack.Screen name={'OrderDetails'} component={OrderDetails}/>
        <Stack.Screen name={'Corporategifts'} component={CorporateGifts}/>
        <Stack.Screen name={'SareeStore'} component={SareeStore}/>

        <Stack.Screen name={'EOSS'} component={EossScreen} />

        <Stack.Screen name={'Corporategifting'} component={Corporategifting} />
        <Stack.Screen name={'Houseofsilver'} component={Houseofsilver} />

        <Stack.Screen name={'coastal'} component={Coastal} />
        <Stack.Screen name={'springsummer'} component={Springsummer} />
        <Stack.Screen name={'newarrivals'} component={Newarrivals} />
        <Stack.Screen name={'weddingseason'} component={Weddingseason} />

        <Stack.Screen name={'dokra'} component={Dokra} />
        <Stack.Screen name={'thegiftedit'} component={Thegiftedit} />


      </Stack.Navigator>
      <AuthModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerimg: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  cartHead: {
    flexDirection: 'row',
    marginRight: 10,
  },
  cartTxt: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: '#212121',
  },
});

export default RootStack;
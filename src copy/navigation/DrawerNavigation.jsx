import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import CustomDrawer from '../components/CustomDrawer';
import Login from '../screens/Login';
import TrackOrder from '../screens/TrackOrder';
import LocateStore from '../screens/LocateStore';
import { useSelector } from 'react-redux';
import AuthModal from '../components/AuthModal';
import MyOrders from '../screens/MyOrders/index';
import MyInformation from '../screens/MyInformation/index';
import MyAddress from '../screens/MyAddress/index';
import JayporeCredits from '../screens/JayporeCredits/index';
import EnterZip from '../components/EnterZip';
import TermsAndCondition from '../screens/T&C/index';
import Savedcards from '../screens/Savedcards/index';
import colors from '../assests/colors';
import Home from '../screens/Home';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Drawer.Navigator
        // style ={styles.header}
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.toggleDrawer()}>
              <IconButton
                icon={'menu'}
                onPress={() => navigation.toggleDrawer()}
              />
            </Pressable>
          ),
          headerTitle: () => (
            <Pressable
              style={styles.headerimg}
              onPress={() => navigation.navigate('Home')}
            >
              <Image
                source={{
                  uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/jaypore.png',
                }}
                style={styles.Images}
              />
            </Pressable>
          ),
          headerRight: () => (
            <View style={styles.headercart}>
              <IconButton
                icon={'shopping-outline'}
                size={25}
                onPress={() => navigation.navigate('WebViewCart')}
              />
              {cart.length > 0 && (
                <Text style={styles.cart}>{cart.length}</Text>
              )}
            </View>
          ),
          headerStyle: {
            backgroundColor: colors.whiteColor1,
          },
        })}
        drawerContent={(props) => (
          <CustomDrawer {...props} onLoginPress={() => setModalVisible(true)} />
        )}
      >
        <Drawer.Screen component={Home} name="HomePage" />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="TrackOrder" component={TrackOrder} />
        <Drawer.Screen name="LocateStore" component={LocateStore} />

        <Drawer.Screen name="MyOrders" component={MyOrders} />
        <Drawer.Screen name="MyInformation" component={MyInformation} />
        <Drawer.Screen name="MyAddress" component={MyAddress} />
        <Drawer.Screen name="Savedcards" component={Savedcards} />
        <Drawer.Screen name="JayporeCredits" component={JayporeCredits} />
        <Drawer.Screen name="EnterZip" component={EnterZip} />
        <Drawer.Screen name="TermsAndConditon" component={TermsAndCondition} />
      </Drawer.Navigator>
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
    backgroundColor: colors.whiteColor1,
  },
  headercart: {
    padding: 10,
    position: 'relative',
  },
  Images: {
    height: 20,
    aspectRatio: 6,
  },
  cart: {
    position: 'absolute',
    backgroundColor: colors.brownColor4,
    color: colors.whiteColor1,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    top: 35,
    right: 22,
    fontSize: 10,
  },
});

export default DrawerNavigation;

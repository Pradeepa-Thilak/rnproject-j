import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigation from './DrawerNavigation';
import Wishlist from '../screens/Wishlist';
import Search from '../screens/Search';
import StoreLocator from '../screens/StoreLocator';
import Profile from '../screens/Profile';
import { Icon,IconButton } from 'react-native-paper';
import { View, Text, StyleSheet,Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {

  const wishlist = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.cartItems);
  const { isLoggedIn } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <BottomTab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarActiveTintColor: '#bb4225',
          tabBarInactiveTintColor: '#d89c8c',
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Home')
              iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Wishlist')
              iconName = focused ? 'heart' : 'heart-outline';
            else if (route.name === 'Search')
              iconName = focused ? 'magnify' : 'magnify';
            else if (route.name === 'StoreLocator')
              iconName = focused ? 'map-marker' : 'map-marker-outline';
            else if (route.name === 'Profile')
              iconName = focused ? 'account' : 'account-outline';

            return (
              <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                borderColor: '#bb4225',
                  paddingTop: 5,
                  width: 50,
                alignItems: 'center'
              }}
            >
              <Icon source={iconName} color={color} size={size} />
            </View>
            );
          },
          tabBarStyle: {
            paddingBottom:20,
          },
          tabBarButton: route.name === 'Wishlist'
              ? (props) => (
                  <View
                    {...props}
                    onTouchEnd={() => {
                      if (!isLoggedIn) {
                        setModalVisible(true);  
                      } else {
                        navigation.navigate('Wishlist');  
                      }
                    }}
                  />
                )
              : undefined,
          headerTitle: () => (
          <Pressable style={styles.headerimg} onPress={() => navigation.navigate('Home')}>
            <Image
              source={{uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/jaypore.png'}}
                style={{ height: 20, aspectRatio: 6 }}
                
            />
          </Pressable>
          ),
          headerLeft: () => (
            <IconButton icon={'chevron-left'} size={30} iconColor='#212121' onPress={() => navigation.navigate('Home')}/>
          ),
          headerRight: () => (
            <View style={{
              flexDirection: 'row',

            }}>
              <IconButton icon={'magnify'} size={25}/>
              <View style={{position:'relative'}}>
              <IconButton icon={'heart-outline'} size={25} onPress={() => navigation.navigate('BottomTab', { screen: 'Wishlist' })} />
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
                }}>{wishlist.length}</Text>
              )}
            </View>
              <View style={{position:'relative'}}>
              <IconButton icon={'shopping-outline'} size={25} onPress={() => navigation.navigate('Cart')} />
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
                }}>{cart.length}</Text>
              )}
            </View>
            </View>
          )
        })}
      >
        <BottomTab.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }} />
        <BottomTab.Screen name="Wishlist" component={Wishlist} />
        <BottomTab.Screen name="Search" component={Search} />
        <BottomTab.Screen name="StoreLocator" component={StoreLocator} />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
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
})

export default BottomTabNavigation;

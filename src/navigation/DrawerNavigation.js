import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import CustomDrawer from '../components/CustomDrawer';
import Login from '../screens/Login';
import TrackOrder from '../screens/TrackOrder';
import LocateStore from '../screens/LocateStore'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return (
    <Drawer.Navigator
      style ={styles.header}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <IconButton icon={'menu'} onPress={() => navigation.toggleDrawer()} />
          </Pressable>
        ),
        headerBackground: () => (
          <View style={styles.headerimg}>
            <Image
              source={{uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/jaypore.png'}}
              style={{ height: 20, aspectRatio: 6, marginLeft: 35,}}
            />
          </View>
        ),
        headerTitle: '',
        headerRight: () => (
          <View style={styles.headercart}>
            <IconButton icon={'shopping-outline'} size={25} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#fff'
        }
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name='HomePage' />
      <Drawer.Screen name='Login' component={Login} />
      <Drawer.Screen name='TrackOrder' component={TrackOrder} />
      <Drawer.Screen name='LocateStore' component={LocateStore}/>
      
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerimg: {
    flex: 1, 
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  }, 
  headercart: {
    padding: 10
  }
})

export default DrawerNavigation
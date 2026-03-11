import React from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import PLP from '../screens/PLP';
import PDP from '../screens/PDP';
import { View, Text, Image , StyleSheet} from 'react-native';
import { Icon, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const RootStack = () => {

  const navigation = useNavigation();
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
        <View style={styles.headerimg}>
          <Image
            source={{uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/jaypore.png'}}
            style={{ height: 20, aspectRatio: 6, marginLeft: 35,}}
          />
        </View>
        ),
        headerTitle: '',
        headerLeft: () => (
          <IconButton icon={'chevron-left'} size={30} iconColor='#212121' onPress={() => {
            if (navigation.canGoBack())
              navigation.goBack();
            else
              navigation.navigate('BottomTab', {screen: 'Home'});
          }}/>
        ),
        headerRight: () => (
          <View style={{
            flexDirection: 'row',

          }}>
            <IconButton icon={'magnify'} size={25} />
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
            <IconButton icon={'shopping-outline'} size={25}/>
          </View>
        )
      }} 
    >
      <Stack.Screen name={'BottomTab'} component={BottomTabNavigation} options={{headerShown: false}}/>
      <Stack.Screen name={'PLP'} component={PLP} />
      <Stack.Screen name={'PDP'} component={PDP} />
    </Stack.Navigator>
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

export default RootStack;

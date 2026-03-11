import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { MenuData } from '../lib/Response';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { IconButton, Icon, Drawer } from 'react-native-paper';

const CustomDrawer = ({ navigation }) => {
  const [menuStack, setMenu] = useState([
    {
      title: 'MENU',
      data: MenuData.results,
    },
  ]);

  const currentLevel = menuStack[menuStack.length - 1];

  const [expand, setExpand] = useState(false);

  const handlePress = item => {
    if (item.groupData && item.groupData.length > 0) {
      setMenu([
        ...menuStack,
        {
          title: item.name,
          data: item.groupData,
        },
      ]);
    } else if (item.itemsData && item.itemsData.length > 0) {
      setMenu([
        ...menuStack,
        {
          title: item.groupName,
          data: item.itemsData,
        },
      ]);
    }
  };

  const handleBack = () => {
    const newStack = [...menuStack];
    newStack.pop();
    setMenu(newStack);
  };

  const renderMenu = item => (
    <Pressable onPress={() => handlePress(item)} style={styles.menuValue}>
      <Text style={styles.menuText}>{item.name || item.groupName}</Text>
      {item.hasChildren && (
        <Icon source="chevron-right" size={22} color="#ccc" />
      )}
    </Pressable>
  );

  return (
    <DrawerContentScrollView>
      <View style={styles.close}>
        <IconButton icon={'close'} onPress={() => navigation.closeDrawer()} />
      </View>
      {menuStack.length > 1 && currentLevel.title !== 'MENU' && (
        <View
          style={{
            backgroundColor: '#bb4225',
            marginVertical: 10,
            flexDirection: 'row',
          }}
        >
          <Pressable onPress={handleBack} style={styles.back} hitSlop={200}>
            <IconButton icon={'chevron-left'} size={25} iconColor="#fff" />
            <Text style={styles.backButton}>{currentLevel.title}</Text>
          </Pressable>
        </View>
      )}

      <FlatList
        data={currentLevel.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => renderMenu(item)}
        style={styles.menuData}
      />

      <View style={styles.bottomMenu}>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={styles.bottomMenuPress}
        >
          <Text style={styles.bottomMenuText}>Login/Signup</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('LocateStore')}
          style={styles.bottomMenuPress}
        >
          <Text style={styles.bottomMenuText}>Locate Stores</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('TrackOrder')}
          style={styles.bottomMenuPress}
        >
          <Text style={styles.bottomMenuText}>Track Orders</Text>
        </Pressable>
      </View>

      <View style={{ paddingHorizontal: 10, paddingBottom: 15 }}>
        <Pressable onPress={() => setExpand(!expand)} style={styles.more}>
          <Text style={styles.bottomMenuText}>More</Text>
          {expand ? (
            <IconButton icon={'chevron-right'} iconColor="#ccc" size={25} />
          ) : (
            <IconButton icon={'chevron-down'} iconColor="#ccc" size={25} />
          )}
        </Pressable>
        {expand && (
          <View style={{ paddingLeft: 12 }}>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>About Us</Text>
            </Pressable>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>Shipping</Text>
            </Pressable>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>Returns & Cancellations</Text>
            </Pressable>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>Terms & conditions</Text>
            </Pressable>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>Privacy</Text>
            </Pressable>
          </View>
        )}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  close: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },
  back: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'Lato-Regular',
    color: '#212121',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  menuData: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  menuValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  bottomMenu: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  bottomMenuPress: {
    paddingVertical: 15,
    paddingRight: 12,
  },
  bottomMenuText: {
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.5,
    color: '#212121',
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default CustomDrawer;

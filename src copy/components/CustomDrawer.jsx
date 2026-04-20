import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { MenuData } from '../lib/Response';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { IconButton, Icon } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import fonts from '../assests/fonts';
import colors from '../assests/colors';
const CustomDrawer = ({ navigation, onLoginPress }) => {
  const { isLoggedIn } = useAuth();
  const [menuStack, setMenu] = useState([
    {
      title: 'MENU',
      data: MenuData.results,
    },
  ]);

  const currentLevel = menuStack[menuStack.length - 1];

  const [accountExpand, setAccountExpand] = useState(false);
  const [expand, setExpand] = useState(false);

  const handlePress = (item) => {
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

  const renderMenu = (item) => (
    <Pressable onPress={() => handlePress(item)} style={styles.menuValue}>
      <Text style={styles.menuText}>{item.name || item.groupName}</Text>
      {item.hasChildren && (
        <Icon source="chevron-right" size={22} color={colors.grayColor6} />
      )}
    </Pressable>
  );

  return (
    <DrawerContentScrollView>
      <View style={styles.close}>
        <IconButton icon={'close'} onPress={() => navigation.closeDrawer()} />
      </View>
      {menuStack.length > 1 && currentLevel.title !== 'MENU' && (
        <View style={styles.headerContainer}>
          <Pressable onPress={handleBack} style={styles.back} hitSlop={200}>
            <IconButton
              icon={'chevron-left'}
              size={25}
              iconColor={colors.whiteColor1}
            />
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
          {isLoggedIn ? (
            <View>
              <Pressable
                style={styles.bottomMenuPress}
                onPress={() => setAccountExpand(!accountExpand)}
              >
                <View style={styles.accountRow}>
                  <Text style={styles.accountText}>My Account</Text>
                  <Icon
                    source={accountExpand ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color={colors.blackColor1}
                  />
                </View>
              </Pressable>
              {accountExpand && (
                <>
                  <Pressable
                    style={styles.subItem}
                    onPress={() => {
                      navigation.closeDrawer();
                      navigation.navigate('MyOrders');
                    }}
                  >
                    <Text style={styles.subItemText}>My Orders</Text>
                  </Pressable>

                  <Pressable
                    style={styles.subItem}
                    onPress={() => {
                      navigation.closeDrawer();
                      navigation.navigate('Wishlist');
                    }}
                  >
                    <Text style={styles.subItemText}>Saved Items</Text>
                  </Pressable>
                  <Pressable
                    style={styles.subItem}
                    onPress={() => {
                      navigation.closeDrawer();
                      navigation.navigate('Savedcards');
                    }}
                  >
                    <Text style={styles.subItemText}>Saved Cards</Text>
                  </Pressable>
                  <Pressable
                    style={styles.subItem}
                    onPress={() => {
                      navigation.closeDrawer();
                      navigation.navigate('MyInformation');
                    }}
                  >
                    <Text style={styles.subItemText}>My Information</Text>
                  </Pressable>
                  <Pressable
                    style={styles.subItem}
                    onPress={() => {
                      navigation.closeDrawer();
                      navigation.navigate('JayporeCredits');
                    }}
                  >
                    <Text style={styles.subItemText}>Jaypore Credits</Text>
                  </Pressable>
                  <Pressable
                    style={styles.subItem}
                    onPress={() => {
                      navigation.closeDrawer();
                      navigation.navigate('MyAddress');
                    }}
                  >
                    <Text style={styles.subItemText}>My Address</Text>
                  </Pressable>
                </>
              )}
            </View>
          ) : (
            <Pressable onPress={onLoginPress} style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>Login/Signup</Text>
            </Pressable>
          )}
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

      <View style={styles.moreContainer}>
        <Pressable onPress={() => setExpand(!expand)} style={styles.more}>
          <Text style={styles.bottomMenuText}>More</Text>
          <IconButton
            icon={expand ? 'chevron-up' : 'chevron-down'}
            iconColor={colors.grayColor6}
            size={25}
          />
        </Pressable>
        {expand && (
          <View style={styles.expandedmorecontainer}>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>About Us</Text>
            </Pressable>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>Shipping</Text>
            </Pressable>
            <Pressable style={styles.bottomMenuPress}>
              <Text style={styles.bottomMenuText}>Returns & Cancellations</Text>
            </Pressable>
            <Pressable
              style={styles.bottomMenuPress}
              onPress={() => navigation.navigate('TermsAndConditon')}
            >
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
  expandedmorecontainer: { paddingLeft: 12 },
  headerContainer: {
    backgroundColor: colors.brownColor1,
    marginVertical: 10,
    flexDirection: 'row',
  },

  accountText: {
    fontFamily: fonts.LatoBold,
  },

  moreContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  close: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor6,
  },
  backButton: {
    color: colors.whiteColor1,
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
  },
  back: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor22,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  menuData: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor6,
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
    fontFamily: fonts.LatoRegular,
    letterSpacing: 0.5,
    color: colors.grayColor22,
    marginRight: 10,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 16,
    gap: 10,
  },
  subItemText: {
    flex: 1,
    fontSize: 13,
    color: colors.grayColor11,
    fontFamily: fonts.LatoRegular,
  },
});

export default CustomDrawer;

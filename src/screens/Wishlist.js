import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, IconButton } from 'react-native-paper';
import { removeFromWishlist } from '../slice/wishListSlice';
import ToastMsg from '../components/ToastMsg';
import { useNavigation } from '@react-navigation/native';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.items);
  console.log(wishlist);
  const [sizeOpen, setSize] = useState(null);
  const dispatch = useDispatch();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const navigation = useNavigation();

  const showToast = msg => {
    setToastVisible(true);
    setToastMsg(msg);

    setTimeout(() => setToastVisible(false), 2000);
  }

  const removefromWishlist = item => {
    dispatch(removeFromWishlist(item));
    showToast('Removed from wishlist');
  }


  const renderWishlist = item => {
    const product = item._source;
    console.log(item);
    const img = item._source.Media.Images[0];

    return (
      <View style={styles.outerBox}>
        <Pressable
          style={{
            position: 'relative',
          }}
          onPress={() => navigation.navigate("PLP")}
        >
          <Image
            source={{
              uri: `https://imagescdn.jaypore.com/img/app/product/${img.Name[0]}/${img.Name}.${img.Extension}`,
            }}
            style={styles.proImg}
          />
          <IconButton
            icon={'close'}
            style={styles.icon}
            iconColor="#000"
            onPress={() => removefromWishlist(item)}
          />
        </Pressable>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.ProductBrand}>{product.Features.Brand}</Text>
          <Text style={styles.ProductName}>{product.Name}</Text>
          <View>
            {product.Discount && product.Discount.Amount > 0 ? (
              <View style={styles.discounted}>
                <Text style={[styles.disPrice, styles.Price]}>
                  &#8377;
                  {Math.round(
                    (product.Discount?.Amount / 100) * Number(product.Price),
                  ).toLocaleString('en-IN')}
                </Text>
                <Text style={[styles.originalPrice, styles.Price]}>
                  &#8377;{Math.round(product.Price).toLocaleString('en-IN')}
                </Text>
                <Text style={[styles.discount, styles.Price]}>
                  {product.Discount?.Amount}% off
                </Text>
              </View>
            ) : (
              <View style={styles.normalPrice}>
                <Text style={[styles.oriPrice, styles.Price]}>
                  &#8377;{Math.round(product.Price).toLocaleString('en-IN')}
                </Text>
              </View>
            )}
          </View>
          <Pressable
            style={styles.sizeBtn}
            onPress={() => setSize(item._id === sizeOpen ? null : item._id)}
          >
            <Text style={styles.sizeText}>Size</Text>
            <Icon source={'chevron-down'} size={15} />
          </Pressable>
          {sizeOpen === item._id && (
            <FlatList
              data={product.Sizes}
              renderItem={({ item }) => (
                <Pressable style={styles.sizeBox}>
                  <Text>{item.Name}</Text>
                </Pressable>
              )}
              style={styles.sizeRender}
            />
          )}
        </View>
        <View style={styles.bagBtn}>
          <Text style={styles.bagText}>Add to Bag</Text>
        </View>
      </View>
    );
  };


  return (
    <View style={styles.first}>
      <ScrollView >
        <View style={styles.wishlist}>
          <Text style={styles.text}>Wishlist</Text>
          {wishlist.length === 0 ? (
            <View>
              <Text style={styles.empty}>Your Saved Items is empty!</Text>
            </View>
          ) : (
            <FlatList
              data={wishlist}
              keyExtractor={item => item._id}
              renderItem={({ item, index }) => renderWishlist(item)}
            />
          )}
        </View>
      </ScrollView>
      <ToastMsg visible={toastVisible} message={toastMsg}/>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  wishlist: {
    paddingHorizontal: 36,
    paddingTop: 10,
    paddingBottom: 36,
  },
  empty: {
    textAlign: 'center',
    color: '#616161',
    margin: 10,
    fontFamily: 'Roboto',
  },
  outerBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    marginBottom: 20,
  },
  proImg: {
    height: 350,
    width: '100%',
    resizeMode: 'contain',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  ProductBrand: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: '#616161',
    paddingHorizontal: 10,
    paddingTop: 10,
    letterSpacing: 0.4,
    lineHeight: 30,
  },
  ProductName: {
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    paddingHorizontal: 10,
    color: '#212121',
    lineHeight: 17,
  },
  discounted: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  Price: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    lineHeight: 35,
  },
  disPrice: {
    color: '#212121',
    marginRight: 5,
  },
  originalPrice: {
    color: '#707070',
    marginRight: 5,
    textDecorationLine: 'line-through',
  },
  discount: {
    color: '#bb4225',
    marginRight: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.1,
  },
  oriPrice: {
    color: '#212121',
    marginRight: 5,
    paddingHorizontal: 10,
  },
  bagBtn: {
    backgroundColor: '#bb4225',
    borderRadius: 6,
    padding: 15,
  },
  bagText: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: '#fff',
    textTransform: 'capitalize',
  },
  sizeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    width: 'auto',
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginLeft: 10,
  },
  sizeText: {
    padding: 5,
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
  sizeRender: {
    boxShadow: 'rgba(0,0,0,0.2)',
    borderWidth: 0.5,
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 10,
  },
  sizeBox: {
    padding: 5,
  },
});

export default Wishlist;

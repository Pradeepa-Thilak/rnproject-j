import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import { ProductData } from '../../lib/Product';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../slice/wishListSlice';
import ToastMsg from '../ToastMsg';


const Products = () => {
  const product = ProductData.results.products.hits;
  console.log(product);

  
  const navigation = useNavigation();
  
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  
  console.log(wishlist);
  
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = msg => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  }

  const addtoWishlist = item => {
    dispatch(addToWishlist(item));
    showToast('Added to Wishlist');
  }

  const removefromWishlist = item => {
    dispatch(removeFromWishlist(item));
    showToast('Removed from Wishlist');
  }

  const isInWishList = product => {
    return wishlist.find(item => item._id === product._id);
  };

  const renderItems = item => {
    const img = item._source.Media.Images[0];
    const pro = item._source;
    return (
      <Pressable style={styles.product} onPress={() => navigation.navigate('PDP',{product : item})}>
        <View
          style={{
            position: 'relative',
          }}
        >
          <Image
            source={{
              uri: `https://imagescdn.jaypore.com/img/app/product/${img.Name[0]}/${img.Name}.${img.Extension}?auto=format&w=500`,
            }}
            style={styles.proImg}
          />
          {isInWishList(item) ? (
            <IconButton
              icon={'heart'}
              style={styles.icon}
              iconColor="#ff0000"
              onPress={() =>removefromWishlist(item)}
            />
          ) : (
            <IconButton
              icon={'heart'}
              style={styles.icon}
              iconColor="#fff"
              onPress={() => addtoWishlist(item)}
            />
          )}
        </View>
        <View>
          <Text style={styles.ProductBrand}>{pro.Features.Brand}</Text>
          <Text
            style={styles.ProductName}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {pro.Name}
          </Text>

          <View>
            {pro.Discount && pro.Discount.Amount > 0 ? (
              <View style={styles.discounted}>
                <Text style={[styles.disPrice, styles.Price]}>
                  &#8377;
                  {Math.round(
                    (pro.Discount?.Amount / 100) * Number(pro.Price),
                  ).toLocaleString('en-IN')}
                </Text>
                <Text style={[styles.originalPrice, styles.Price]}>
                  &#8377;{Math.round(pro.Price).toLocaleString('en-IN')}
                </Text>
                <Text style={[styles.discount, styles.Price]}>
                  {pro.Discount?.Amount}% off
                </Text>
              </View>
            ) : (
              <View style={styles.normalPrice}>
                <Text style={[styles.oriPrice, styles.Price]}>
                  &#8377;{Math.round(pro.Price).toLocaleString('en-IN')}
                </Text>
              </View>
            )}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        paddingBottom: 108,
        paddingHorizontal: 12,
      }}
    >
      <FlatList
        data={product}
        keyExtractor={item => item._id}
        renderItem={({ item }) => renderItems(item)}
        numColumns={2}
      />

      <ToastMsg visible={toastVisible} message={toastMsg } />
    </View>
  );
};

const styles = StyleSheet.create({
  proImg: {
    height: 250,
    width: '100%',
    resizeMode: 'fit',
  },
  product: {
    width: '50%',
    paddingHorizontal: 5,
    paddingBottom: 30,
  },
  ProductBrand: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase',
    color: '#616161',
    paddingHorizontal: 10,
    paddingTop: 10,
    letterSpacing: 0.4,
  },
  ProductName: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    paddingHorizontal: 10,
    color: '#212121',
  },
  discounted: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  Price: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
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
  icon: {
    position: 'absolute',
    right: 0,
    top: -3,
  },
});
export default Products;

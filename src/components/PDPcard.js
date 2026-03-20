import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { IconButton } from 'react-native-paper';
import { addToWishlist, removeFromWishlist } from '../slice/wishListSlice';
import ToastMsg from './ToastMsg';
import { useDispatch, useSelector } from 'react-redux';
import { stylesPro as styles } from '../screens/PDP/PDP_style';

export default function Pdpcard({ item, btnclr, btntxtcolor }) {
  const pro = item._source;
  const img = pro.Media.Images[0];
  const imageUrl = `https://imagescdn.jaypore.com/img/app/product/${img.Name[0]}/${img.Name}.${img.Extension}`;
  // console.log('image url,', imageUrl);
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  // console.log(wishlist);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = msg => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const addtoWishlist = item => {
    dispatch(addToWishlist(item));
    showToast('Added to Wishlist');
  };

  const removefromWishlist = item => {
    dispatch(removeFromWishlist(item));
    showToast('Removed from Wishlist');
  };

  const isInWishList = product => {
    return wishlist.some(item => item._id === product._id);
  };

  return (
    <>
      <Pressable style={styles.card}>
        <View style={styles.imagecon}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          {isInWishList(item) ? (
            <IconButton
              icon={'heart'}
              style={styles.icon}
              iconColor="#ff0000"
              onPress={() => removefromWishlist(item)}
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
        <View style={styles.carddetails}>
          <Text style={styles.brand}>{pro.Features.Brand}</Text>

          <Text style={styles.name} numberOfLines={1}>
            {pro.Name}
          </Text>

          {pro.Discount?.Amount > 0 ? (
            <View style={{ marginTop: 5, marginBottom: 5 }}>
              <View style={styles.priceRow}>
                <Text style={styles.discountPrice}>
                  ₹{pro.SellingPrice.toLocaleString('en-IN')}
                </Text>

                <Text style={styles.originalPrice}>
                  ₹{Math.round(pro.Price).toLocaleString('en-IN')}
                </Text>
              </View>

              <Text style={styles.discount}>{pro.Discount.Amount}% OFF</Text>
            </View>
          ) : (
            <Text style={styles.price}>
              ₹{Math.round(pro.Price).toLocaleString('en-IN')}
            </Text>
          )}
        </View>
        <Pressable style={styles.atbbtn}>
          <Text
            style={[
              { backgroundColor: btnclr },
              { color: btntxtcolor },
              styles.addtobag,
            ]}
          >
            Add to bag
          </Text>
        </Pressable>
      </Pressable>
      <ToastMsg visible={toastVisible} message={toastMsg} />
    </>
  );
}

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Icon, IconButton } from 'react-native-paper';
import { stylesPro as styles } from '../screens/PDP/PDP_style';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../slice/wishListSlice';
import ToastMsg from './ToastMsg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ProductDisplay = ({ product, wholeProduct }) => {
  const image = product.Media.Images;
  const [activeIndex, setActive] = useState(0);
  const imageRef = useRef(null);
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const showToast = msg => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActive(index);
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
    return wishlist.find(item => item._id === product._id);
  };

  const goLeft = () => {
    const prevIndex = activeIndex === 0 ? image.length - 1 : activeIndex - 1;

    imageRef.current.scrollToIndex({
      index: prevIndex,
      animated: true,
    });

    setActive(prevIndex);
  };

  const goRight = () => {
    const nextIndex = activeIndex === image.length - 1 ? 0 : activeIndex + 1;

    imageRef.current.scrollToIndex({
      index: nextIndex,
      animated: true,
    });

    setActive(nextIndex);
  };

  const renderImage = item => (
    <View style={{ aspectRatio: 500 / 662, position: 'relative' }}>
      <Image
        source={{
          uri: `https://imagescdn.jaypore.com/img/app/product/${item.Name[0]}/${item.Name}.${item.Extension}`,
        }}
        style={styles.proImg}
      />
      <IconButton
        icon={'heart'}
        style={styles.icon}
        iconColor={isInWishList(wholeProduct) ? "#ff0000" : '#fff'}
        onPress={() => {
          isInWishList(wholeProduct) ? 
            removefromWishlist(wholeProduct) :
            addtoWishlist(wholeProduct)
          }}
      />
      <IconButton
        icon={'chevron-left'}
        style={styles.leftArrow}
        iconColor="#707070"
        onPress={() => goLeft()}
      />
      <IconButton
        icon={'chevron-right'}
        style={styles.rightArrow}
        iconColor="#797070"
        onPress={() => goRight()}
      />
    </View>
  );

  return (
    <View style={{ backgroundColor: '#fff' }}>
      {/* breadCrumbs */}
      <Text
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 15,
          paddingHorizontal: 10,
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        <Text
          style={styles.breadcrumb}
          onPress={() => navigation.navigate('BottomTab')}
        >
          Home
        </Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>Women Clothing</Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>{product.DefaultCategoryName}</Text>
        <Text style={styles.breadcrumb}> &gt; </Text>
        <Text style={styles.breadcrumb}>{product.Name}</Text>
      </Text>
      <FlatList
        ref={imageRef}
        data={image}
        pagingEnabled
        horizontal
        renderItem={({ item }) => renderImage(item)}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      />
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 26,
          paddingBottom: 15,
        }}
      >
        {/* Indicator */}
        <View
          style={[styles.flex, { justifyContent: 'center', marginBottom: 10 }]}
        >
          {image.map((_, ind) => (
            <Pressable
              key={ind}
              onPress={() => {
                imageRef.current.scrollToIndex({
                  index: ind,
                  animated: true,
                });
              }}
              hitSlop={10}
            >
              <Text
                style={[
                  styles.indicators,
                  activeIndex === ind
                    ? { backgroundColor: '#bf7154' }
                    : { backgroundColor: '#ebeaea' },
                ]}
              ></Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.ProductName}>{product.Name}</Text>
        <View style={styles.flex}>
          <Text style={styles.ProductCollection}>
            {product.Features.Collection}
          </Text>
          <Text
            style={[
              styles.ProductCollection,
              {
                textTransform: 'capitalize',
                fontWeight: 0,
                marginLeft: 10,
              },
            ]}
          >
            View Full Collection <Icon source={'chevron-right'} size={16} />
          </Text>
        </View>
        <Text style={styles.ProductBrand}>{product.Features.Brand}</Text>
        {product.Discount && product.Discount.Amount > 0 ? (
          <View style={styles.ProductPrice}>
            <Text style={styles.Pricecommon}>
              &#8377;{' '}
              {Math.round(
                (product.Discount?.Amount / 100) * Number(product.Price),
              ).toLocaleString('en-IN')}
            </Text>
            <Text
              style={[
                styles.Pricecommon,
                { color: '#707070', textDecorationLine: 'line-through' },
              ]}
            >
              &#8377; {Math.round(product.Price).toLocaleString('en-IN')}
            </Text>
            <Text
              style={[
                styles.Pricecommon,
                { color: '#bb4225', textTransform: 'uppercase' },
              ]}
            >
              <Text style={{ color: '#707070' }}>(MRP)</Text>
              {product.Discount?.Amount}% off
            </Text>
          </View>
        ) : (
          <View style={styles.ProductPrice}>
            <Text style={styles.Pricecommon}>
              &#8377; {Math.round(product.Price).toLocaleString('en-IN')}
            </Text>
          </View>
        )}

        <Text style={styles.ProductTax}>inclusive of all taxes</Text>
      </View>
      <ToastMsg visible={toastVisible} message={toastMsg} />
    </View>
  );
};

export default ProductDisplay;

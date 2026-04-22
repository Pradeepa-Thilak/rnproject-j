import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  FlatList,
} from 'react-native';
import { Icon, IconButton } from 'react-native-paper';
import { stylesPro as styles } from '../screens/PDP/PDP_style';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../slice/wishListSlice';
import ToastMsg from './ToastMsg';
import { useNavigation } from '@react-navigation/native';
import colors from '../assests/colors';
const { width } = Dimensions.get('window');

const ProductDisplay = ({ product, wholeProduct }) => {
  const image = product.Media.Images;
  const [activeIndex, setActive] = useState(0);
  const imageRef = useRef(null);
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const showToast = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActive(index);
  };

  const addtoWishlist = (item) => {
    dispatch(addToWishlist(item));
    showToast('Added to Wishlist');
  };

  const removefromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
    showToast('Removed from Wishlist');
  };

  const isInWishList = (product) => {
    return wishlist.find((item) => item._id === product._id);
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

  const renderImage = (item) => (
    <View style={styles.imageWrapper}>
      <Image
        source={{
          uri: `https://imagescdn.jaypore.com/img/app/product/${item.Name[0]}/${item.Name}.${item.Extension}`,
        }}
        style={styles.proImg}
      />
      <IconButton
        icon={'heart'}
        style={styles.icon}
        iconColor={
          isInWishList(wholeProduct) ? colors.redColor2 : colors.whiteColor1
        }
        onPress={() => {
          isInWishList(wholeProduct)
            ? removefromWishlist(wholeProduct)
            : addtoWishlist(wholeProduct);
        }}
      />
      <IconButton
        icon={'chevron-left'}
        style={styles.leftArrow}
        iconColor={colors.grayColor14}
        onPress={() => goLeft()}
      />
      <IconButton
        icon={'chevron-right'}
        style={styles.rightArrow}
        iconColor={colors.grayColor15}
        onPress={() => goRight()}
      />
    </View>
  );

  return (
    <View style={styles.root}>
      {/* breadCrumbs */}
      <Text
        style={styles.breadcrumbContainer}
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
      <View style={styles.productInfoContainer}>
        {/* Indicator */}
        <View style={[styles.flex, styles.indicatorContainer]}>
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
                    ? styles.indicatorActive
                    : styles.indicatorInactive,
                ]}
              />
            </Pressable>
          ))}
        </View>

        <Text style={styles.ProductName}>{product.Name}</Text>
        <View style={styles.flex}>
          <Text style={styles.ProductCollection}>
            {product.Features.Collection}
          </Text>
          <Text style={[styles.ProductCollection, styles.collectionExtra]}>
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
            <Text style={[styles.Pricecommon, styles.strikePrice]}>
              &#8377; {Math.round(product.Price).toLocaleString('en-IN')}
            </Text>
            <Text style={[styles.Pricecommon, styles.discountText]}>
              <Text style={styles.mrpText}>(MRP)</Text>
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

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
import { addToCart } from '../slice/cartSlice';
import ToastMsg from '../components/ToastMsg';
import { useNavigation } from '@react-navigation/native';
import { checkStock } from '../utils/StockChecker';
import PortalCom from '../components/PortalCom';
import { updateWishlistSize } from '../slice/wishListSlice';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.items);
  console.log(wishlist);
  const [sizeOpen, setSize] = useState(null);
  const dispatch = useDispatch();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const navigation = useNavigation();
  const [dropdownPos, setDropdownPos] = useState({ x: 0, y: 0 });
  const [size, setSizeval] = useState('');

  const showToast = msg => {
    setToastVisible(true);
    setToastMsg(msg);

    setTimeout(() => setToastVisible(false), 2000);
  }

  const removefromWishlist = item => {
    dispatch(removeFromWishlist(item));
    showToast('Removed from wishlist');
  }

  const addtoCart = item => {
    dispatch(addToCart(item));
    showToast('Added to Cart');
  }

  const renderWishlist = item => {
    const product = item._source;
    const isInStock = checkStock(product);
    console.log(item);
    const img = item._source.Media.Images[0];

    return (
      <View style={styles.outerBox}>
        {!isInStock && (
          <View style={styles.outOfStockOverlay}>
            <Text style={styles.outOfStockOverlayText}>Out of stock</Text>
          </View>
        )}
        <IconButton
            icon={'close'}
            style={styles.icon}
            iconColor="#000"
            onPress={() => removefromWishlist(item)}
          />
        <Pressable
          style={{
            position: 'relative',
          }}
          onPress={() => navigation.navigate("PDP", { product: item })}
          disabled={!isInStock}
        >
          <Image
            source={{
              uri: `https://imagescdn.jaypore.com/img/app/product/${img.Name[0]}/${img.Name}.${img.Extension}`,
            }}
            style={styles.proImg}
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
            onPress={(event) => {
              const { pageX, pageY } = event.nativeEvent;

              if (sizeOpen !== item._id) {
                setSize(item._id);
                setDropdownPos({
                  x: pageX,
                  y: pageY
                })
              } else {
                setSize(null)
              }
            }}
            disabled={!isInStock}
          >
            <Text style={styles.sizeText}>Size {item.selectedSize || ''}</Text>
            <Icon source={'chevron-down'} size={15} />
          </Pressable>
          {sizeOpen === item._id && (
            <PortalCom
              positions={{
                x: dropdownPos.x,
                y: dropdownPos.y
              }}
              onBackdropPress={() => setSize(null)}
            >
              <View style={styles.dropDownMenuContainer}>
              {product.Sizes.map((size, ind) => (
                <Pressable key={ind} onPress={() => {
                  dispatch(updateWishlistSize({id:item._id, size:size.Name}));
                  setSize(null);
                }}
                style={[styles.DropdownMenu, item.selectedSize===size.Name && {backgroundColor: '#bb4225'}]}
                >
                  <Text
                    style={[styles.DropdownMenuTxt, item.selectedSize === size.Name && {color: '#fff'} ]}
                  >{size.Name}</Text>
                </Pressable>
              ))}
            </View>
            </PortalCom>
          )}
        </View>
        <Pressable style={styles.bagBtn} onPress={() => addtoCart(item)} disabled={!isInStock}>
          <Text style={styles.bagText}>Add to Bag</Text>
        </Pressable>
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
              renderItem={({ item }) => renderWishlist(item)}
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
    position: 'relative'
  },
  outOfStockOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.7)',
    zIndex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  outOfStockOverlayText: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: '#eb3840',
    fontWeight: 900,
    textAlign:'center',
  },
  proImg: {
    height: 350,
    width: '100%',
    resizeMode: 'contain',
  },
  icon: {
    position: 'absolute',
    right: '10%',
    top: '3%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 10,
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
  dropDownMenuContainer: {
        position: 'absolute',
        top: '100%',
        left: 0,
        marginTop: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        elevation: 10,
        zIndex: 999,
        width: 80,
    },
    DropdownMenu: {
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    DropdownMenuTxt: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: '#000',
        textTransform: 'uppercase',
    },
});

export default Wishlist;

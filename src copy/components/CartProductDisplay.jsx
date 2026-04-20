import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { stylesCart as styles } from '../screens/Cart/CartStyles';
import { Icon, IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { updateSize, updateQty, removeFromCart } from '../slice/cartSlice';
import { addToWishlist } from '../slice/wishListSlice';
import PortalCom from './PortalCom';

const CartProductDisplay = ({ cart, setToastMsg, setToastVisible }) => {
  const dispatch = useDispatch();
  const [dropdownIndex, setDropdown] = useState(null);
  const [dropdownMenu, setDropdownMenu] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ x: 0, y: 0 });

  const showToastMsg = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);

    setTimeout(() => setToastVisible(false), 2000);
  };

  const removefromCart = (item) => {
    dispatch(removeFromCart(item));
    showToastMsg('Removed from Cart');
  };

  const addtoWishlist = (item) => {
    dispatch(addToWishlist(item));
    dispatch(removeFromCart(item));
    showToastMsg('Added to Wishlist');
  };

  const renderCartItem = (item, index) => {
    const product = item._source;
    const image = `https://imagescdn.jaypore.com/img/app/product/${product.Media.Images[0].Name[0]}/${product.Media.Images[0].Name}.${product.Media.Images[0].Extension}`;
    const selectedSize = product.Sizes.find(
      (size) => size.Name === item.selectedSize,
    );
    console.log(item.quantity);
    return (
      <View
        style={[
          styles.CartProductItem,
          index === cart.length - 1 && styles.lastItem,
          dropdownIndex === index && styles.activeDropdownItem,
        ]}
      >
        <View style={styles.CartProduct}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.proImg} />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.CartProBrand}>{product.Features.Brand}</Text>
            <Text style={styles.CartProName}>{product.Name}</Text>
            {product.Discount && product.Discount.Amount > 0 ? (
              <View style={styles.ProductPrice}>
                <Text style={styles.Pricecommon}>
                  &#8377;{' '}
                  {Math.round(
                    (product.Discount?.Amount / 100) *
                      Number(product.Price) *
                      item.quantity,
                  ).toLocaleString('en-IN')}{' '}
                </Text>

                <Text style={[styles.Pricecommon, styles.strikeSmall]}>
                  &#8377;{' '}
                  {Math.round(product.Price * item.quantity).toLocaleString(
                    'en-IN',
                  )}
                </Text>

                <Text style={[styles.Pricecommon, styles.discountText]}>
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
            <View style={styles.PopMenuContainer}>
              <Pressable
                style={styles.PopMenu}
                onPress={(event) => {
                  const { pageX, pageY } = event.nativeEvent;

                  if (dropdownMenu !== 'size') {
                    setDropdown(index);
                    setDropdownMenu('size');
                    setDropdownPos({
                      x: pageX,
                      y: pageY,
                    });
                  } else {
                    setDropdown(null);
                    setDropdownMenu(null);
                  }
                }}
              >
                <Text style={styles.PopMenuCat}>size:</Text>
                <Text style={styles.PopMenuValue}>{item.selectedSize}</Text>
                <IconButton
                  icon={
                    dropdownMenu === 'size' && dropdownIndex === index
                      ? 'chevron-up'
                      : 'chevron-down'
                  }
                  size={15}
                  style={styles.iconReset}
                />
              </Pressable>
              {dropdownIndex === index && dropdownMenu === 'size' && (
                <PortalCom
                  positions={{
                    x: dropdownPos.x,
                    y: dropdownPos.y,
                  }}
                  onBackdropPress={() => {
                    setDropdown(null);
                    setDropdownMenu(null);
                  }}
                >
                  <View style={styles.dropDownMenuContainer}>
                    {product.Sizes.map((size, ind) => (
                      <Pressable
                        key={ind}
                        onPress={() => {
                          dispatch(
                            updateSize({ id: item._id, size: size.Name }),
                          );
                          setDropdownMenu(null);
                        }}
                        style={[
                          styles.DropdownMenu,
                          item.selectedSize === size.Name &&
                            styles.selectedDropdownItem,
                        ]}
                      >
                        <Text
                          style={[
                            styles.DropdownMenuTxt,
                            item.selectedSize === size.Name &&
                              styles.selectedDropdownText,
                          ]}
                        >
                          {size.Name}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </PortalCom>
              )}
              <Pressable
                style={styles.PopMenu}
                onPress={(event) => {
                  const { pageX, pageY } = event.nativeEvent;

                  if (dropdownMenu !== 'quantity') {
                    setDropdown(index);
                    setDropdownMenu('quantity');
                    setDropdownPos({
                      x: pageX,
                      y: pageY,
                    });
                  } else {
                    setDropdown(null);
                    setDropdownMenu(null);
                  }
                }}
              >
                <Text style={styles.PopMenuCat}>Qty:</Text>
                <Text style={styles.PopMenuValue}>{item.quantity}</Text>
                <IconButton
                  icon={
                    dropdownMenu === 'quantity' && dropdownIndex === index
                      ? 'chevron-up'
                      : 'chevron-down'
                  }
                  size={15}
                  style={styles.iconReset}
                />
              </Pressable>
              {dropdownIndex === index && dropdownMenu === 'quantity' && (
                <PortalCom
                  positions={{
                    x: dropdownPos.x + 20,
                    y: dropdownPos.y - 50,
                  }}
                  onBackdropPress={() => {
                    setDropdown(null);
                    setDropdownMenu(null);
                  }}
                >
                  <View style={styles.dropDownMenuContainer}>
                    {Array.from(
                      { length: selectedSize.Quantity },
                      (_, i) => i + 1,
                    ).map((qty) => (
                      <Pressable
                        style={[
                          styles.DropdownMenu,
                          item.quantity === qty && styles.selectedDropdownItem,
                        ]}
                        onPress={() => {
                          setDropdownMenu(null);
                          dispatch(updateQty({ id: item._id, qty: qty }));
                        }}
                        key={qty}
                      >
                        <Text
                          style={[
                            styles.DropdownMenuTxt,
                            item.quantity === qty &&
                              styles.selectedDropdownText,
                          ]}
                        >
                          {qty}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </PortalCom>
              )}
            </View>
            <View>
              {selectedSize.Quantity < 5 && (
                <View style={styles.RemainingContain}>
                  <Text style={styles.leftTxt}>
                    Only {selectedSize.Quantity} left !
                  </Text>
                </View>
              )}
              <View style={styles.DeliveryContain}>
                <Icon source={'truck-outline'} size={13} />
                <Text style={styles.FreeDeliveryTxt}>
                  Free delivery by 24th March
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ProBottomContain}>
          <Pressable
            style={styles.ProBottomValues}
            onPress={() => removefromCart(item)}
          >
            <IconButton icon={'trash-can-outline'} style={styles.iconReset} />
            <Text style={styles.ProBottomText}>Remove</Text>
          </Pressable>
          <Pressable
            style={styles.ProBottomValues}
            onPress={() => addtoWishlist(item)}
          >
            <IconButton icon={'heart-outline'} style={styles.iconReset} />
            <Text style={styles.ProBottomText}>Move To Wishlist</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item, index }) => renderCartItem(item, index)}
        style={styles.CartProductList}
      />
    </View>
  );
};

export default CartProductDisplay;

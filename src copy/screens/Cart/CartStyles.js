import { StyleSheet } from 'react-native';
import fonts from '../../assests/fonts';
import colors from '../../assests/colors';
export const stylesCart = StyleSheet.create({
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.grayColor6,
  },

  leftBorder: {
    borderLeftWidth: 1,
    borderLeftColor: colors.grayColor6,
  },

  iconWrapper: {
    marginBottom: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowGap: {
    flexDirection: 'row',
    gap: 7,
  },

  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  modalTitle: {
    fontSize: 16,
  },

  inputFocused: {
    paddingTop: 5,
  },

  applyText: {
    color: colors.brownColor2,
    fontSize: 16,
  },

  applyRemoveText: {
    fontFamily: fonts.LatoBold,
    fontSize: 14,
    textAlign: 'center',
  },

  marginVertical: {
    marginVertical: 5,
  },

  saveText: {
    color: colors.greenColor1,
    fontSize: 12,
    fontFamily: fonts.LatoRegular,
  },

  termsText: {
    fontSize: 12,
    fontFamily: fonts.LatoRegular,
    color: colors.grayBlueColor1,
  },

  toastContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: 'transparent',
    paddingTop: 60,
    paddingHorizontal: 10,
  },

  toastBox: {
    backgroundColor: colors.blackColor2,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
  },

  toastText: {
    color: colors.whiteColor1,
    textAlign: 'center',
  },
  lastItem: {
    marginBottom: 0,
  },

  activeDropdownItem: {
    zIndex: 1000,
  },

  imageContainer: {
    aspectRatio: 200 / 265,
  },

  productDetails: {
    paddingLeft: 10,
    width: '70%',
  },

  strikeSmall: {
    color: colors.grayColor14,
    textDecorationLine: 'line-through',
    fontSize: 12,
  },

  discountText: {
    color: colors.brownColor1,
    textTransform: 'capitalize',
    fontSize: 12,
  },

  iconReset: {
    padding: 0,
    margin: 0,
  },

  selectedDropdownItem: {
    backgroundColor: colors.brownColor1,
  },

  selectedDropdownText: {
    color: colors.whiteColor1,
  },
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  pincodeOverride: {
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  inputHighlight: {
    borderColor: colors.brownColor1,
  },
  selectedBtn: {
    backgroundColor: colors.brownColor1,
  },
  selectedBtnText: {
    color: colors.whiteColor1,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  disabledBtn: {
    backgroundColor: colors.grayColor6,
  },

  emptyBox: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 28,
    paddingBottom: 30,
    backgroundColor: colors.whiteColor1,
  },
  emptyText1: {
    fontSize: 21,
    fontFamily: fonts.LatoBold,
    marginTop: 15,
    color: colors.grayColor22,
    letterSpacing: 0.25,
    textAlign: 'center',
  },
  emptyText2: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    flexWrap: 'wrap',
    lineHeight: 32,
    letterSpacing: 0.35,
    color: colors.grayColor14,
    textAlign: 'center',
  },
  emptyBtnBox: {
    paddingTop: 35,
    paddingBottom: 25,
  },
  shopBtn: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: colors.brownColor1,
    borderRadius: 4,
  },
  shopBtnText: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    color: colors.whiteColor1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  addressBox: {
    marginTop: 10,
    backgroundColor: colors.whiteColor1,
    paddingHorizontal: 15,
    paddingVertical: 13,
    flexDirection: 'row',
  },
  addressBox_Des: {
    flexWrap: 'wrap',
    width: '66%',
    fontSize: 14,
    fontFamily: fonts.LatoBold,
    color: colors.grayColor11,
    letterSpacing: 0.2,
  },
  addressBox_InputBtn: {
    borderWidth: 1,
    borderColor: colors.brownColor1,
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: '30%',
  },
  addressBox_InputBtn_Text: {
    flexWrap: 'wrap',
    textAlign: 'center',
    color: colors.brownColor2,
    letterSpacing: 0.2,
    fontSize: 13,
    fontFamily: fonts.LatoBold,
  },
  addressModalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  addressModalBox_head: {
    fontSize: 16,
    fontFamily: fonts.LatoBold,
    color: colors.blackColor1,
    letterSpacing: 0.2,
  },
  PincodeInputBox_container: {
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    position: 'relative',
  },
  PincodeInputBoxLabel: {
    position: 'absolute',
    left: '10%',
    top: '30%',
    fontFamily: fonts.LatoRegular,
    fontSize: 16,
    color: colors.grayColor12,
  },
  PincodeInputBoxLabel_active: {
    top: 4,
  },
  PincodeInputBox_check_btn: {
    position: 'absolute',
    right: '10%',
    top: '30%',
  },
  PincodeInputBox_check_text: {
    fontFamily: fonts.LatoRegular,
    fontSize: 12,
    color: colors.grayColor12,
  },
  OrderSummaryContainer: {
    borderRightWidth: 1,
    borderRightColor: colors.grayColor6,
  },
  OrderSummarySpriteIconContainer: {
    marginBottom: 10,
  },
  OrderSummarybottomdeetborder: {
    borderLeftWidth: 1,
    borderLeftColor: colors.grayColor6,
  },
  PincodeInputBox: {
    height: 55,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.brownColor1,
    borderRadius: 6,
    paddingHorizontal: 17,
    paddingTop: 18,
    paddingBottom: 7,
  },
  addAdressBox: {
    marginTop: 16,
    paddingHorizontal: 15,
  },
  addAddress: {
    borderWidth: 1,
    borderColor: colors.blackColor1,
    borderRadius: 4,
  },
  addAddressText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 14,
    fontFamily: fonts.LatoBold,
    color: colors.blackColor1,
  },
  DetailsHead: {
    paddingTop: 5,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: fonts.LatoBold,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: colors.grayColor11,
  },
  contactInputContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    gap: 10,
  },
  NameInputContainer: {
    position: 'relative',
    marginBottom: 10,
    width: '50%',
  },
  InputLabel: {
    position: 'absolute',
    left: '5%',
    top: '30%',
    fontFamily: fonts.LatoRegular,
    fontSize: 16,
    color: colors.grayColor12,
    paddingRight: 17,
  },
  InputLabelActive: {
    top: 1,
    fontSize: 12,
  },
  InputBox: {
    // position: 'absolute',
    height: 55,
    borderWidth: 1,
    borderColor: colors.grayColor12,
    width: '100%',
    borderRadius: 6,
    paddingHorizontal: 17,
    paddingTop: 18,
    paddingBottom: 7,
  },
  InputContainer: {
    position: 'relative',
    marginBottom: 10,
    width: '100%',
  },
  AddressBottomContain: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: colors.grayColor12,
  },
  AddressSaveBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: colors.brownColor1,
    borderRadius: 4,
  },
  AddressSaveBtnText: {
    textAlign: 'center',
    color: colors.whiteColor1,
    textTransform: 'uppercase',
    lineHeight: 30,
    fontFamily: fonts.LatoRegular,
    fontSize: 16,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  SaveAddressBtn: {
    width: '30%',
    borderWidth: 1,
    borderColor: colors.grayColor27,
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  SaveAddressBtnText: {
    textAlign: 'center',
    fontFamily: fonts.LatoRegular,
    fontSize: 13,
    lineHeight: 20,
  },
  DefaultAddress: {
    fontFamily: fonts.EBGaramondRegular,
    letterSpacing: 0.2,
    color: colors.grayColor10,
    fontSize: 13,
  },

  // cart product list
  CartProductList: {
    marginTop: 12,
  },
  CartProductItem: {
    marginBottom: 12,
    backgroundColor: colors.whiteColor1,
    overflow: 'visible',
  },
  CartProduct: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  proImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  CartProBrand: {
    fontFamily: fonts.LatoRegular,
    fontSize: 11,
    color: colors.brownColor12,
    paddingTop: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    fontWeight: 600,
  },
  CartProName: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    color: colors.blackColor1,
    flexWrap: 'wrap',
    fontWeight: 600,
  },
  ProductPrice: {
    flexDirection: 'row',
  },
  Pricecommon: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    marginRight: 11,
    paddingTop: 5,
    lineHeight: 20,
  },
  PopMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    position: 'relative',
  },
  PopMenu: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingLeft: 5,
    position: 'relative',
  },
  PopMenuCat: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    textTransform: 'capitalize',
    marginRight: 5,
    color: colors.grayColor14,
  },
  PopMenuValue: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  dropDownMenuContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    marginTop: 5,
    backgroundColor: colors.whiteColor1,
    borderWidth: 1,
    borderColor: colors.grayColor6,
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
    fontFamily: fonts.LatoRegular,
    fontSize: 16,
    color: colors.blackColor1,
    textTransform: 'uppercase',
  },
  ProBottomContain: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  ProBottomValues: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: 5,
    borderWidth: 0.5,
  },
  ProBottomText: {
    fontFamily: fonts.LatoBold,
    fontSize: 12,
    color: colors.blackColor1,
  },
  DeliveryContain: {
    paddingTop: 5,
    marginTop: 5,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  FreeDeliveryTxt: {
    fontFamily: fonts.LatoRegular,
    fontSize: 12,
    fontWeight: 500,
    color: colors.blackColor1,
    lineHeight: 20,
  },
  leftTxt: {
    color: colors.brownColor10,
    fontFamily: fonts.LatoBold,
    fontSize: 12,
    lineHeight: 20,
  },
  // Coupon
  couponcon: {
    marginTop: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 13,
    justifyContent: 'space-between',
  },
  ctxt: {
    textAlign: 'left',
    textTransform: 'capitalize',
    fontSize: 16,
    fontFamily: fonts.LatoBold,
    fontWeight: 800,
    color: colors.grayColor22,
  },
  modalcon: {
    width: '100%',
    height: '100%',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.grayColor13,
  },
  innercoupon: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 5,
    borderTopColor: colors.grayColor27,
    borderBottomWidth: 5,
    borderBottomColor: colors.grayColor27,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.brownColor14,
    borderRadius: 4,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  defaultText: {
    position: 'absolute',
    left: 17,
    color: colors.grayColor11,
    fontSize: 14,
  },
  label: {
    position: 'absolute',
    top: 9,
    left: 17,
    fontSize: 11,
    color: colors.grayColor11,
  },
  textinput: {
    paddingTop: 18,
    paddingHorizontal: 17,
    fontSize: 16,
  },
  applybtn: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  errorText: {
    color: colors.redColor1,
    fontSize: 16,
    marginTop: 2,
    marginLeft: 4,
  },
  newcoupon: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 10,
    paddingBottom: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(97,97,97,0.1)',
  },
  couponname: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    height: 32,
    backgroundColor: 'rgba(3,169,244,.05)',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(3,169,244,0.5)',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coupontxt: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    color: colors.grayColor17,
  },
  removebtn: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blackColor1,
    backgroundColor: colors.whiteColor1,
    paddingHorizontal: 12,
    width: 78,
    borderRadius: 4,
  },

  // Order Summary
  ordercon: {
    marginTop: 10,
    backgroundColor: colors.whiteColor2,
  },
  oshead: {
    paddingHorizontal: 15,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor4,
    marginBottom: 15,
    flexDirection: 'row',
    gap: 5,
  },
  osheadtxt: {
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
    textTransform: 'capitalize',
    fontSize: 17,
    marginBottom: 10,
  },
  osdeets: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  osdeetsitem: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  lefttxt: {
    width: '55%',
    textAlign: 'left',
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor27,
    fontSize: 14,
  },

  righttxt: {
    width: '45%',
    textAlign: 'right',
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor27,
    fontSize: 14,
  },
  rightcontainer: {
    width: '45%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 5,
  },

  strike: {
    textDecorationLine: 'line-through',
    color: colors.grayColor14,
    fontSize: 14,

    fontFamily: fonts.LatoRegular,
  },

  free: {
    color: colors.grayColor27,
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: fonts.LatoRegular,
  },
  total: {
    borderTopWidth: 1,
    borderTopColor: colors.grayColor4,
    marginTop: 5,
    paddingTop: 15,
    flexDirection: 'row',
  },
  bottomline: {
    fontFamily: fonts.LatoRegular,
    fontWeight: 700,
    fontSize: 12,
    color: colors.greenColor2,
    flexDirection: 'row',
  },
  bottomlinetxt: {
    fontFamily: fonts.LatoRegular,
    fontWeight: 700,
    fontSize: 12,
    color: colors.greenColor2,
  },
  bottomdeets: {
    paddingVertical: 15,
    backgroundColor: colors.grayColor2,
    flexDirection: 'row',
  },
  bottomdeetsitem: {
    width: '33.3%',
    alignItems: 'center',
    minHeight: 80,
    justifyContent: 'flex-start',
  },
  bottomdeetsitemtxt: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: fonts.LatoRegular,
    fontSize: 12,
  },

  // footer
  footer: {
    backgroundColor: colors.whiteColor1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  CartFooter: {
    width: '50%',
  },
  CartFooteTxt: {
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    color: colors.grayColor22,
    letterSpacing: 0.2,
  },
  summaryText: {
    fontSize: 13,
    fontFamily: fonts.LatoBold,
    color: colors.grayColor27,
    letterSpacing: 0.2,
  },
  CartFooterBtn: {
    backgroundColor: colors.brownColor1,
    width: '100%',
    marginHorizontal: 5,
    borderRadius: 4,
  },
  CartFooterBtnText: {
    textAlign: 'center',
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    color: colors.whiteColor1,
    lineHeight: 40,
    textTransform: 'capitalize',
  },
});

import { Dimensions, StyleSheet } from 'react-native';
import fonts from '../../assests/fonts';
import colors from '../../assests/colors';
const { width } = Dimensions.get('window');

export const stylesPro = StyleSheet.create({
  root: {
    backgroundColor: colors.whiteColor1,
  },
  productInfoContainer: {
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 15,
  },

  breadcrumbContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    paddingHorizontal: 10,
  },

  imageWrapper: {
    aspectRatio: 500 / 662,
    position: 'relative',
    backgroundColor: colors.whiteColor1,
  },

  indicatorContainer: {
    justifyContent: 'center',
    marginBottom: 10,
  },

  indicatorActive: {
    backgroundColor: colors.brownColor4,
  },

  indicatorInactive: {
    backgroundColor: colors.grayColor23,
  },

  collectionExtra: {
    textTransform: 'capitalize',
    fontWeight: '400',
    marginLeft: 10,
  },

  strikePrice: {
    color: colors.grayColor14,
    textDecorationLine: 'line-through',
  },

  discountText: {
    color: colors.brownColor1,
    textTransform: 'uppercase',
  },

  mrpText: {
    color: colors.grayColor14,
  },
  paddingRight: {
    paddingRight: 20,
  },

  divider: {
    borderWidth: 0.5,
    marginVertical: 20,
  },
  discountContainer: {
    marginTop: 5,
    marginBottom: 5,
  },

  breadcrumb: {
    fontFamily: fonts.LatoRegular,
    fontSize: 12,
    color: colors.grayColor22,
    letterSpacing: 0.2,
  },
  proImg: {
    height: '100%',
    width: width,
    resizeMode: 'contain',
  },
  indicators: {
    marginLeft: 10,
    width: 6,
    height: 6,
    borderRadius: 50,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProductName: {
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    marginBottom: 10,
  },
  ProductCollection: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    color: colors.grayColor14,
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 10,
  },
  ProductBrand: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    color: colors.grayColor14,
    textTransform: 'uppercase',
    fontWeight: 700,
    marginTop: 10,
  },
  ProductPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  Pricecommon: {
    fontSize: 16,
    fontFamily: fonts.LatoRegular,
    marginRight: 8,
  },
  TextDecoration: {
    textDecorationLine: 'underline',
  },
  ProductTax: {
    fontSize: 12,
    fontFamily: fonts.LatoRegular,
    marginTop: 12,
    textTransform: 'capitalize',
    color: colors.greenColor1,
  },
  taxMargin: {
    marginTop: 12,
  },
  MarginBottom: {
    marginBottom: 10,
  },
  leftArrow: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    zIndex: 10,
    backgroundColor: colors.whiteOpacityColor1,
  },
  rightArrow: {
    position: 'absolute',
    right: 10,
    top: '50%',
    backgroundColor: colors.whiteOpacityColor1,
    zIndex: 10,
    transform: [{ translateY: -15 }],
  },
  ProductDisplayWhole: {
    marginTop: 8,
    backgroundColor: colors.whiteColor1,
  },
  ProductDisplayHead: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  ProductDisplayHeadTxt: {
    fontSize: 15,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor22,
    fontWeight: 700,
    letterSpacing: 0.2,
  },
  ProductDisplayButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProductDes: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor11,
    letterSpacing: 0.15,
  },
  ProductDet: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ProductDetHead: {
    width: '50%',
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor11,
    letterSpacing: 0.2,
    flexWrap: 'wrap',
  },
  ProductDetValue: {
    fontSize: 14,
    fontFamily: fonts.LatoBold,
    letterSpacing: 0.2,

    flexWrap: 'wrap',
    width: '50%',
  },
  ReadMore: {
    fontSize: 12,
    fontFamily: fonts.LatoBold,
    marginTop: 17,
    letterSpacing: 0.17,
    textDecorationLine: 'underline',

    cursor: 'pointer',
  },
  ReadMoreBox: {
    paddingRight: 20,
  },
  // Jaypore Symbol
  scon: {
    marginTop: 8,
    padding: 20,
    backgroundColor: 'white',
  },
  imgcon: {
    width: 134,
    aspectRatio: 134 / 71,
  },
  img: {
    width: '100%',
    height: '100%',
  },

  // PDP Footer Button
  btncon: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  btn1: {
    width: '48%',
    height: 48,
    borderWidth: 1,
    borderColor: colors.brownColor2,
    borderRadius: 4,
    justifyContent: 'center',
  },
  btn1txt: {
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.brownColor2,
    fontSize: 16,
  },
  btn2: {
    width: '48%',
    height: 48,
    backgroundColor: colors.brownColor2,
    borderRadius: 4,
    justifyContent: 'center',
  },
  btn2txt: {
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.whiteColor1,
  },

  // Scrollable Widget
  parentcon: {
    backgroundColor: 'white',
    paddingTop: 19,
    paddingBottom: 28,
    paddingLeft: 10,
  },
  heading: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.grayColor22,
    textTransform: 'capitalize',
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
  },
  scrollable: {
    padding: 5,
  },

  // PDP Card
  card: {
    width: 163,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.creamColor12,
  },
  imagecon: {
    aspectRatio: 163 / 216,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  carddetails: {
    minHeight: 105,
    paddingHorizontal: 10,
  },
  brand: {
    fontSize: 14,
    textTransform: 'capitalize',
    color: colors.grayColor22,
    marginTop: 8,
  },
  name: {
    fontSize: 14,
    color: colors.grayColor22,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    fontSize: 13,
    color: colors.grayColor22,
    marginRight: 8,
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
  },
  originalPrice: {
    fontSize: 14,
    color: colors.grayColor11,
    textDecorationLine: 'line-through',
    marginRight: 9,
  },

  discount: {
    fontSize: 13,
    color: colors.brownColor6,
    marginTop: 2,
  },

  price: {
    fontSize: 12,
    color: colors.grayColor22,
  },
  atbbtn: {
    paddingHorizontal: 0,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.creamColor12,
  },
  addtobag: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: fonts.LatoBold,
    fontWeight: 800,
    paddingVertical: 14,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: -3,
  },
  iconPDP: {
    position: 'absolute',
    right: 0,
    top: -3,
  },

  shead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sheadtext: {
    fontSize: 14,
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
  },

  sizescon: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  sizeItem: {
    marginRight: 25,
    marginBottom: 15,
    position: 'relative',
  },

  sbox: {
    minWidth: 48,
    height: 36,
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: colors.creamColor13,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sboxtext: {
    fontSize: 14,
  },

  selectedBox: {
    backgroundColor: colors.grayColor4,
    borderColor: colors.grayColor4,
  },

  selectedText: {
    color: 'white',
  },

  qty: {
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
    fontSize: 12,
    color: colors.brownColor3,
  },
  sizebar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.creamColor13,
    backgroundColor: colors.grayColor1,
    marginTop: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
    gap: 18,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  sinnertext: {
    flexDirection: 'row',
  },
  sinnertxt: {
    marginRight: 7,
    fontSize: 11,
    fontFamily: fonts.LatoBold,
    fontWeight: 700,
  },
  delivery: {
    paddingBottom: 8,
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: colors.creamColor13,
    borderRadius: 4,
    paddingVertical: 18,
    paddingRight: 17,
    backgroundColor: colors.creamColor12,
  },
  checkbtn: {
    position: 'absolute',
    right: 15,
  },
  error: {
    backgroundColor: colors.creamColor11,
    borderWidth: 1,
    borderColor: 'red',
  },
  errorText: {
    color: colors.redColor1,
    marginTop: 5,
    fontSize: 12,
    fontFamily: fonts.LatoRegular,
  },
  lastline: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  lastlinetext: {
    textDecorationLine: 'underline',
    fontSize: 13,
    color: 'black',
    fontFamily: fonts.LatoBold,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '10%',
  },

  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  IconButton: {
    padding: 0,
    margin: 0,
  },

  ProductContainerSizeChart: {
    marginHorizontal: 15,
    paddingTop: 18,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.grayColor6,
  },
  ProductContainerSizeChart_ImgContainer: {
    width: '28%',
    aspectRatio: 906 / 1200,
  },
  ProductContainerSizeChart_Image: {
    height: '100%',
    width: '100%',
  },
  ProductContainerSizeChart_DetailContainer: {
    marginLeft: 30,
    width: '70%',
  },
  ProductContainerSizeChart_Collection: {
    fontFamily: fonts.LatoBold,
    fontSize: 14,
    color: colors.blackColor1,
    marginRight: 10,
    letterSpacing: 0.16,
  },
  ProductContainerSizeChart_Name: {
    fontFamily: fonts.LatoRegular,
    fontSize: 12,
    color: colors.blackColor1,
    marginRight: 10,
    letterSpacing: 0.16,
    flexWrap: 'wrap',
    lineHeight: 16,
    marginTop: 2,
  },
  ProductContainerSizeChart_ProductPrice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  Price: {
    color: colors.grayColor14,
    textDecorationLine: 'line-through',
  },
  ProductContainerSizeChart_Pricecommon: {
    marginRight: 9,
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.22,
  },
  Common: {
    color: colors.brownColor1,
    textTransform: 'uppercase',
  },
  bottom: {
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 25,
  },
  bottomhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  bottomheadtxt: {
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    fontWeight: 700,
    color: colors.grayColor11,
    textTransform: 'capitalize',
  },
  sizebtn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.brownColor4,
    width: 50,
    height: 25,
    borderRadius: 2,

    overflow: 'hidden',
  },
  leftbtn: {
    width: '50%',

    alignItems: 'center',
    justifyContent: 'center',
  },

  rightbtn: {
    width: '50%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  leftbtntxt: {
    color: colors.brownColor4,
    fontSize: 10,
  },

  rightbtntxt: {
    color: colors.brownColor4,
    fontSize: 10,
  },
  activeBtn: {
    backgroundColor: colors.brownColor4,
  },

  activeText: {
    color: 'white',
  },

  table: {
    borderWidth: 1,
    borderColor: colors.grayColor6,
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor6,
  },

  radioCell: {
    width: 40,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.grayColor6,
  },
  radioOuter: {
    width: 15,
    height: 15,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: colors.grayColor6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioOuterSelected: {
    borderColor: colors.brownColor2,
  },

  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.brownColor2,
  },
  cell: {
    width: 75,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.grayColor6,
  },

  cellText: {
    textAlign: 'center',
    fontFamily: fonts.LatoRegular,
    fontSize: 14,

    color: colors.grayColor11,
    textTransform: 'capitalize',
  },
  headcellText: {
    textAlign: 'center',
    fontFamily: fonts.LatoRegular,
    fontSize: 14,
    fontWeight: 700,
    color: colors.grayColor11,
    textTransform: 'capitalize',
  },
  atcbtn: {
    width: '100%',
    borderRadius: 4,
    height: 48,
    backgroundColor: colors.brownColor2,
    borderWidth: 1,
    borderColor: colors.brownColor2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  atcbtntxt: {
    color: colors.whiteColor1,
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  disabledBtn: {
    opacity: 0.75,
  },
});

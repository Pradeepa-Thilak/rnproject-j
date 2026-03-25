import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export const stylesPro = StyleSheet.create({
    breadcrumb: {
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: '#212121',
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
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        marginBottom: 10,
    },
    ProductCollection: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#707070',
        textTransform: 'uppercase',
        fontWeight: 700,
        marginBottom: 10,
    },
    ProductBrand: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#707070',
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
        fontFamily: 'Lato-Regular',
        marginRight: 8,
    },
    ProductTax: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        marginTop: 12,
        textTransform: 'capitalize',
        color: '#4caf50',
    },
    leftArrow: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: -15 }],
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    rightArrow: {
        position: 'absolute',
        right: 10,
        top: '50%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        zIndex: 10,
        transform: [{ translateY: -15 }],
    },
    ProductDisplayWhole: {
        marginTop: 8,
        backgroundColor: '#fff',
    },
    ProductDisplayHead: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        
    },
    ProductDisplayHeadTxt: {
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        color: '#212121',
        fontWeight: 700,
        letterSpacing: 0.2,

    },
    ProductDisplayButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ProductDes: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#616161',
        letterSpacing: 0.15,
    },
    ProductDet: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    ProductDetHead: {
        width: '50%',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#616161',
        letterSpacing: 0.2,
        flexWrap: 'wrap',
    },
    ProductDetValue: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.2,
        color: '#000',
        flexWrap: 'wrap',
        width: '50%',
    },
    ReadMore: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        marginTop: 17,
        letterSpacing: 0.17,
        textDecorationLine: 'underline',
        color: '#000',
        cursor: 'pointer',
    },
    ReadMoreBox: {
        paddingRight: 20,
    },
    // Jaypore Symbol
     scon:{
        marginTop:8,
        padding:20,
        backgroundColor:"white"
    },
    imgcon:{
         width:134,
        aspectRatio:134/71,
    },
    img:{
      width:"100%",
      height:"100%"
    },

    // PDP Footer Button
     btncon:{
        flexDirection:"row",
        position:"absolute",  
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"white",
        paddingVertical:10,
        paddingHorizontal:20,
        justifyContent:"space-between"
    },
    btn1:{
        width:"48%",
        height:48,
        borderWidth:1,
        borderColor:"#bb4125",
        borderRadius:4,
        justifyContent:"center"
    },
    btn1txt:{
        fontFamily:"Lato-Bold",
        fontWeight:700,
        textTransform:"uppercase",
        textAlign:"center",
        color:"#bb4125",
        fontSize:16
    },
    btn2:{
        width:"48%",
        height:48,
        backgroundColor:"#bb4125",
        borderRadius:4,
        justifyContent:"center"

    },
    btn2txt:{
        fontFamily:"Lato-Bold",
        fontWeight:700,
        textTransform:"uppercase",
        textAlign:"center",
        color:"#fff"
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
        color: '#212121',
        textTransform: 'capitalize',
        fontFamily: 'Lato-Bold',
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
        borderColor: '#f2f2f2',
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
        color: '#212121',
        marginTop: 8,
    },
    name: {
        fontSize: 14,
        color: '#212121',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    discountPrice: {
        fontSize: 13,
        color: '#212121',
        marginRight: 8,
        fontFamily: 'Lato-Bold',
        fontWeight: 700,
    },
    originalPrice: {
        fontSize: 14,
        color: '#616161',
        textDecorationLine: 'line-through',
        marginRight: 9,
    },

    discount: {
        fontSize: 13,
        color: '#c76321',
        marginTop: 2,
    },

    price: {
        fontSize: 12,
        color: '#212121',
    },
    atbbtn: {
        paddingHorizontal: 0,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2',
    },
    addtobag: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Lato-Bold',
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

    // Size Chart
    scon: {
        padding: 20,
        backgroundColor: 'white',
        marginTop: 8,
    },

    shead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sheadtext: {
        fontSize: 14,
        fontFamily:"Lato-Bold",
        fontWeight:700
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
        borderColor: '#f0f1f2',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    sboxtext: {
        fontSize: 14,
    },

    selectedBox: {
        backgroundColor: '#C5502E',
        borderColor: '#C5502E',
    },

    selectedText: {
        color: 'white',
    },

    qty: {
        position: 'absolute',
        bottom: -15,
        alignSelf: 'center',
        fontSize: 12,
        color: '#C5502E',
    },
    sizebar: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#f0f1f2',
        backgroundColor: '#f5f5f5',
        marginTop: 5,
        paddingVertical: 3,
        paddingHorizontal: 8,
        gap: 18,
        alignSelf: 'flex-start',
        marginBottom:20
    },
    sinnertext: {
        flexDirection: 'row',
    
    },
    sinnertxt: {
        marginRight: 7,
        fontSize:11,
        fontFamily:"Lato-Bold",
        fontWeight:700
    },
    delivery: {
        paddingBottom: 8,
    
    },
    inputContainer:{
        position:"relative",
        justifyContent:"center"
    },
    input: {
        borderWidth: 2,
        borderColor: '#f0f1f2',
        borderRadius:4,
        paddingVertical: 18,
        paddingRight: 17,
        backgroundColor:"#F2F2F2"
    },
    checkbtn: {
        position: 'absolute',
        right: 15,
    },
    errorText:{
        color:"#eb3840",
        marginTop:5,
        fontSize:12,
        fontFamily:"Lato-Regular"
    },
    lastline:{
        flexDirection:"row",
        marginTop:10,
        gap:25,
        justifyContent:"space-around",
        alignItems:"center"
    },
    lastlinetext:{
        textDecorationLine: "underline",
        fontSize:13,
        color:"black",
        fontFamily:"Lato-Bold"
    },
});
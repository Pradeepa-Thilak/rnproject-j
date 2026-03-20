import { View, Image, Pressable, Text, StyleSheet } from 'react-native';
import ModalCom from './PLP/ModalCom';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SpriteIcon from './SpriteIcon';
import { columns ,data,cmdata} from '../lib/ConstData';
import { IconButton } from 'react-native-paper';
import { stylesPro } from '../screens/PDP/PDP_style';
import { useDispatch } from 'react-redux';

export default function SizeChartModal({ open, close , product}) {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const [unit, setUnit] = useState('in');
    console.log('size chart modal');
  const isEnabled = selected !== null;
  const img = product.Media.Images[0]

  return (
    <ModalCom open={open} close={close} bgcolor={'white'}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={close}>
            {/* <SpriteIcon
              x={252}
              y={52}
              w={25}
              h={25}
              spriteWidth={1150}
              spriteHeight={520}
            /> */}
            <IconButton icon={'chevron-left'} style={{ padding: 0, margin: 0}} size={25}/>
          </Pressable>
          <Text style={styles.title}>Size Chart</Text>

        </View>
          
        <View style={styles.ProductContainerSizeChart}>
          <View style={styles.ProductContainerSizeChart_ImgContainer}>
            <Image source={{uri: `https://imagescdn.jaypore.com/img/app/product/${img.Name[0]}/${img.Name}.${img.Extension}`}} style={styles.ProductContainerSizeChart_Image} />
          </View>
          <View style={styles.ProductContainerSizeChart_DetailContainer}>
            <Text style={styles.ProductContainerSizeChart_Collection}>{product.Features.Collection}</Text>
            <Text style={styles.ProductContainerSizeChart_Name}>{product.Name}</Text>
            {product.Discount && product.Discount.Amount > 0 ? (
              <View style={styles.ProductContainerSizeChart_ProductPrice}>
                <Text style={styles.ProductContainerSizeChart_Pricecommon}>
                  &#8377;{' '}
                  {Math.round(
                    (product.Discount?.Amount / 100) * Number(product.Price),
                  ).toLocaleString('en-IN')}
                </Text>
                <Text
                  style={[
                    styles.ProductContainerSizeChart_Pricecommon,
                    { color: '#707070', textDecorationLine: 'line-through' },
                  ]}
                >
                  &#8377; {Math.round(product.Price).toLocaleString('en-IN')}
                </Text>
                <Text
                  style={[
                    styles.ProductContainerSizeChart_Pricecommon,
                    { color: '#bb4225', textTransform: 'uppercase' },
                  ]}
                >
                  {product.Discount?.Amount}% off
                </Text>
              </View>
            ) : (
              <View style={styles.ProductContainerSizeChart_ProductPrice}>
                <Text style={styles.ProductContainerSizeChart_Pricecommon}>
                  &#8377; {Math.round(product.Price).toLocaleString('en-IN')}
                </Text>
              </View>
            )}
            <Text style={[stylesPro.ProductTax,{marginTop: 12}]}>Inclusive of All taxes</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomhead}>
            <View>
              <Text style={styles.bottomheadtxt}>Garment measurements</Text>
              <Text>
                (Measurements in {unit === 'in' ? 'Inches' : 'Centimeters'})
              </Text>
            </View>
            <View style={styles.sizebtn}>
              <Pressable
                style={[styles.leftbtn, unit === 'cm' && styles.activeBtn]}
                onPress={() => setUnit('cm')}
              >
                <Text
                  style={[
                    styles.leftbtntxt,
                    unit === 'cm' && styles.activeText,
                  ]}
                >
                  cm
                </Text>
              </Pressable>
              <Pressable
                style={[styles.rightbtn, unit === 'in' && styles.activeBtn]}
                onPress={() => setUnit('in')}
              >
                <Text
                  style={[
                    styles.rightbtntxt,
                    unit === 'in' && styles.activeText,
                  ]}
                >
                  in
                </Text>
              </Pressable>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.table}>
              {/* Header Row */}
              <View style={styles.row}>
                <View style={styles.radioCell} />

                {columns.map((col, i) => (
                  <View key={i} style={styles.cell}>
                    <Text style={styles.headcellText}>{col}</Text>
                  </View>
                ))}
              </View>

              {(unit === 'in' ? data : cmdata).map((item, index) => (
                <Pressable
                  key={index}
                  style={styles.row}
                  onPress={() => setSelected(index)}
                >
                  <View style={styles.radioCell}>
                    <View
                      style={[
                        styles.radioOuter,
                        selected === index && styles.radioOuterSelected,
                      ]}
                    >
                      {selected === index && <View style={styles.radioInner} />}
                    </View>
                  </View>

                  {columns.map((col, i) => {
                    const key = col.toLowerCase().replace(/\s/g, '');
                    return (
                      <View key={i} style={styles.cell}>
                        <Text style={styles.cellText}>{item[key]}</Text>
                      </View>
                    );
                  })}
                </Pressable>
              ))}
            </View>
          </ScrollView>
          <Pressable style={[
              styles.atcbtn,
              !isEnabled && styles.disabledBtn
            ]}
            disabled={!isEnabled}
          >
            <Text style={styles.atcbtntxt}>Add to cart</Text>
          </Pressable>
        </View>
      </View>
    </ModalCom>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '10%'
  },

  header: {
    paddingTop:20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  close: {
    fontSize: 20,
  },
  ProductContainerSizeChart: {
    marginHorizontal: 15,
    paddingTop: 18,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
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
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: '#000',
    marginRight: 10,
    letterSpacing: 0.16,
  },
  ProductContainerSizeChart_Name: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#000',
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
  ProductContainerSizeChart_Pricecommon: {
    marginRight: 9,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing:0.22,
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
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontWeight: 700,
    color: '#616161',
    textTransform: 'capitalize',
  },
  sizebtn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#bf7154',
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
    color: '#bf7154',
    fontSize: 10,
  },

  rightbtntxt: {
    color: '#bf7154',
    fontSize: 10,
  },
  activeBtn: {
    backgroundColor: '#bf7154',
  },

  activeText: {
    color: 'white',
  },

  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  radioCell: {
    width: 40,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  radioOuter: {
    width: 15,
    height: 15,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioOuterSelected: {
    borderColor: '#bb4125',
  },

  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#bb4125',
  },
  cell: {
    width: 75,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },

  cellText: {
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 14,

    color: '#616161',
    textTransform: 'capitalize',
  },
  headcellText: {
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontWeight: 700,
    color: '#616161',
    textTransform: 'capitalize',
  },
  atcbtn:{
    width:"100%",
    borderRadius:4,
    height:48,
    backgroundColor:"#bb4125",
    borderWidth:1,
    borderColor:"#bb4125",
    justifyContent:"center",
    alignItems:"center"
  },
  atcbtntxt:{
    color:"#fff",
    fontFamily:"Lato-Bold",
    fontSize:16,
    textTransform:"capitalize"

  },
  disabledBtn: {
  opacity: 0.75,
},
});
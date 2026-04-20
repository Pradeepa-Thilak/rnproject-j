import { View, Image, Pressable, Text, ScrollView } from 'react-native';
import ModalCom from './PLP/ModalCom';
import React, { useState } from 'react';
import { columns, data, cmdata } from '../lib/ConstData';
import { IconButton } from 'react-native-paper';
import { stylesPro as styles } from '../screens/PDP/PDP_style';

export default function SizeChartModal({ open, close, product }) {
  const [selected, setSelected] = useState(null);
  // const dispatch = useDispatch();
  const [unit, setUnit] = useState('in');
  console.log('size chart modal');
  const isEnabled = selected !== null;
  const img = product.Media.Images[0];

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
            <IconButton
              icon={'chevron-left'}
              style={styles.IconButton}
              size={25}
            />
          </Pressable>
          <Text style={styles.title}>Size Chart</Text>
        </View>

        <View style={styles.ProductContainerSizeChart}>
          <View style={styles.ProductContainerSizeChart_ImgContainer}>
            <Image
              source={{
                uri: `https://imagescdn.jaypore.com/img/app/product/${img.Name[0]}/${img.Name}.${img.Extension}`,
              }}
              style={styles.ProductContainerSizeChart_Image}
            />
          </View>
          <View style={styles.ProductContainerSizeChart_DetailContainer}>
            <Text style={styles.ProductContainerSizeChart_Collection}>
              {product.Features.Collection}
            </Text>
            <Text style={styles.ProductContainerSizeChart_Name}>
              {product.Name}
            </Text>
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
                    styles.Price,
                  ]}
                >
                  &#8377; {Math.round(product.Price).toLocaleString('en-IN')}
                </Text>
                <Text
                  style={[
                    styles.ProductContainerSizeChart_Pricecommon,
                    styles.Common,
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
            <Text style={[styles.ProductTax, styles.taxMargin]}>
              Inclusive of All taxes
            </Text>
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
          <Pressable
            style={[styles.atcbtn, !isEnabled && styles.disabledBtn]}
            disabled={!isEnabled}
          >
            <Text style={styles.atcbtntxt}>Add to cart</Text>
          </Pressable>
        </View>
      </View>
    </ModalCom>
  );
}

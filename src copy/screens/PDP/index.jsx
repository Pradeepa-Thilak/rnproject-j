import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProductDisplay from '../../components/ProductDisplay';
import ProductDetails from '../../components/ProductDetails';
import Jayporesymbol from '../../components/SaleOfPDP';
import Pdpbuttons from '../../components/PDPFooterButton';
import Scrollablewidget from '../../components/Scrollablewidget';
import { PDPdata } from '../../lib/PDPdata';
import SizeChart from '../../components/Sizechart';
import colors from '../../assests/colors';
import ScreenWrapper from '../../components/ScreenWrapper';
const PDP = ({ route }) => {
  const { product } = route.params;
  console.log(product);
  const pro = product._source;

  const [selectedSize] = useState(
    pro.Sizes.find((item) => item.IsDefault === 1),
  );

  // const strategy = PDPdata;
  // console.log(strategy)
  return (
    <ScreenWrapper>
      <View>
        <ScrollView>
          <View style={styles.container}>
            <ProductDisplay product={pro} wholeProduct={product} />
            <Jayporesymbol />
            <SizeChart product={pro} />
            <ProductDetails product={pro} selectedSize={selectedSize} />
            <View style={styles.PDPContainer}>
              {PDPdata.map((strategy) => (
                <Scrollablewidget
                  key={strategy.strategyMessage}
                  title={strategy.strategyMessage}
                  products={strategy.hits}
                  btnclr={'white'}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <Pdpbuttons product={product} />
      </View>
    </ScreenWrapper>
  );
};

export default PDP;

const styles = StyleSheet.create({
  container: {
    marginBottom: '16.5%',
    backgroundColor: colors.whiteColor1,
  },
  PDPContainer: {
    marginTop: 12,
  },
});

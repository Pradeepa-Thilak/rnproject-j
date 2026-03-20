import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductDisplay from '../../components/ProductDisplay';
import ProductDetails from '../../components/ProductDetails';
import Jayporesymbol from '../../components/SaleOfPDP';
import Pdpbuttons from '../../components/PDPFooterButton';
import Scrollablewidget from '../../components/Scrollablewidget';
import { PDPdata } from '../../lib/PDPdata';
import SizeChart from '../../components/Sizechart';

const PDP = ({ route }) => {
  const { product } = route.params;
  console.log(product);
  const pro = product._source;

  const [selectedSize, setSize] = useState(
    pro.Sizes.find(item => item.IsDefault === 1)
  )

  const strategy = PDPdata;
  // console.log(strategy)
  return (
    <View>
      <ScrollView >
          <View style={{marginBottom: '16.5%'}}>
        <ProductDisplay product={pro} wholeProduct={product}/>
          <Jayporesymbol />
          <SizeChart product={pro} />
          <ProductDetails product={pro} selectedSize={selectedSize} />
          <View style={{ marginTop: 12 }}>
            {PDPdata.map((strategy) => (
              <Scrollablewidget
                key={strategy.strategyMessage} 
                title={strategy.strategyMessage}
                products={strategy.hits}
                btnclr={"white"}
                />  
            ))}
            
          </View>
        </View>
    </ScrollView>
        <Pdpbuttons product={product}/>
    </View>
  );
};

export default PDP;

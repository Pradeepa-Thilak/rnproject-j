import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { stylesTandC as styles } from './T&C_styles';
import { terms } from '../../lib/ConstData';
import { FlatList } from 'react-native-gesture-handler';
import Footer from '../../components/Footer';

const TermsAndCondition = () => {


  return (
      <ScrollView >
          <View style={styles.TandC_Container}>
            <View style={styles.TandC_Head}>
                <Text style={styles.TandC_HeadTxt}>OFFERS TERMS & CONDITIONS</Text>
            </View>
                <Text style={styles.TandC_Content}>
                    Welcome to JAYPORE. This page lists current Offers and other related details. Please read the terms and conditions carefully before participating in an Offer. By participating in an Offer, you agree that you have read, understood and agreed to be bound by the terms mentioned below.
                </Text>
                <View style={styles.TandC_SubHead}>
                <Text style={styles.TandC_SubHeadTxt}>New User Offer</Text>
            </View>
            <View>
                <Text style={styles.TandC_Content}>
                    Terms & Conditions 
                </Text>
            </View>
            <View>
                {terms.map((item,ind) => (
                    <View style={styles.TandC_TermContainer} key={ind}>
                        <Text style={{paddingLeft: 8}}>{'\u2022'}</Text>
                        <Text style={[styles.TandC_Content, styles.TandC_TermTxt]}>{item}</Text>
                    </View>
                ))}
            </View>
              
        </View>
          <Footer />
      </ScrollView>
  )
}

export default TermsAndCondition
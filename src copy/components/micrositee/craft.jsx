import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from '../micrositee/sections/ComponentWithImage_HeaderAndDescription';

import Anjumodicollection from '../micrositee/sections/anjumodicollection';
import Anjumodibanner from './sections/anjumodibanner';

import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import Footer from '../../components/Footer';
import NewIn from './sections/NewIn';
import fonts from '../../assests/fonts';
const Craft = () => {
  const [coastalData, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('craft');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  console.log(coastalData);

  const sectionData = coastalData?.SectionDetails || [];

  console.log('Section', sectionData[9]);
  return (
    <ScrollView style={{ backgroundColor: '#faf2e5' }}>
      <Msiteherobanner
        details={sectionData[0]}
        imagestyle={{
          width: '100%',

          aspectRatio: 375 / 287.5,
          resizeMode: 'cover',
        }}
      />
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[1]}
        AR={32 / 49}
        buttonText="VIEW ALL"
      />
      <Anjumodicollection details={sectionData[2]} buttonText="SHOP BY CRAFT" />
      <NewIn />
      <Anjumodibanner details={sectionData[3]} />
      <NewIn />
      <Anjumodicollection details={sectionData[4]} buttonText="SHOP BY CRAFT" />
      <Anjumodicollection details={sectionData[5]} buttonText="SHOP BY CRAFT" />
      <NewIn />
      <Anjumodicollection details={sectionData[6]} buttonText="SHOP BY CRAFT" />
      <NewIn />
      <Footer />
    </ScrollView>
  );
};

export default Craft;

export const styles = StyleSheet.create({
  componentContainer: {
    aspectRatio: 32 / 49,
    backgroundColor: '#faf2e5',
  },
  componentBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  componentTxt: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.EBGaramondRegular,
    color: '#383938',
  },
  componentButton: {
    borderWidth: 1,
    borderColor: '#707070',
    paddingHorizontal: 25,
    paddingVertical: 2.5,
  },
  componentButtonTxt: {
    fontSize: 12,
    fontFamily: fonts.LatoRegular,
    color: '#383938',
  },
  bestSellerContainer: {
    paddingVertical: 50,
    backgroundColor: '#faecd6',
  },
  bestSellerTxt: {
    fontSize: 12,
    fontFamily: fonts.EBGaramondRegular,
    color: '#383938',
    marginHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  bestSellerGridContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bestSellerGridImage: {
    width: '100%',
    aspectRatio: 138 / 173,
  },
  bgTopImage: {
    position: 'absolute',
    width: '100%',
    top: 0,
    right: 40,
    height: 300,
    zIndex: 2,
  },
});

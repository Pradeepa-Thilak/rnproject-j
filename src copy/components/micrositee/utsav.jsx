import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from '../micrositee/sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';
import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import Footer from '../../components/Footer';
import fonts from '../../assests/fonts';
const Utsav = () => {
  const [coastalData, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('utsav');
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

          aspectRatio: 360 / 564,
          resizeMode: 'cover',
        }}
      />
      <ComponentWithHeaderAndGrid details={sectionData[2]} />
      <ImageHeaderAndGrid details={sectionData[3]} />
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[4]}
        AR={40 / 61}
      />
      {/* <BGImage details={sectionData[6]}/> */}
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[10]}
        bgImage={false}
        reverseimg={true}
      />
      <BGImage details={sectionData[10]} />
      <Footer />
    </ScrollView>
  );
};

export default Utsav;

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

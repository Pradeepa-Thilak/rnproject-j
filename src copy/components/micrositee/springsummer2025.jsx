import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from '../micrositee/sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';
import ImageAndDescriptionComponent from '../micrositee/sections/ImageAndDescriptionComponent';
import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import Msiteherobanner from './sections/Msiteherobanner';
import Parawithtextimagebtn from './sections/Parawithtextimagebtn/index';
import GridImages from './sections/Gridimages';
import Twocompswithimgdes from './sections/Twocompswithimgdes';
import Footer from '../../components/Footer';
import fonts from '../../assests/fonts';
const Springsummer2025 = () => {
  const [ssdata, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('springsummer2025');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  console.log(ssdata);

  const sectionData = ssdata?.SectionDetails || [];

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
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[1]}
        AR={32 / 49}
      />
      <ComponentWithHeaderAndGrid details={sectionData[2]} />
      <ImageHeaderAndGrid details={sectionData[3]} />

      <ImageAndDescriptionComponent details={sectionData[5]} />
      {/* section-5*/}
      <GridImages
        data={sectionData[6]?.MediaDetails?.filter(
          (item) => item.a_media_type === 'Image',
        )?.map((item) => ({
          image: item.a_image,
          title: item.a_title,
        }))}
        spacing={20}
        imageStyle={{
          width: '100%',
          aspectRatio: 1 / 1,
        }}
        style={{ paddingHorizontal: 20, paddingVertical: 30 }}
      />
      <Twocompswithimgdes
        details={sectionData[7]}
        AR={32 / 49}
        reversebg={true}
      />

      {/* <BGImage details={sectionData[6]}/> */}
      {/* <ComponentWithImage_HeaderAndDescription details={sectionData[7]}/>  has 2 images*/}
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[8]}
        AR={32 / 49}
      />
      <Parawithtextimagebtn details={sectionData[9]} AR={32 / 49} />

      <ComponentWithImage_HeaderAndDescription
        details={sectionData[10]}
        bgImage={false}
      />
      <BGImage details={sectionData[10]} />
      <Footer />
    </ScrollView>
  );
};

export default Springsummer2025;

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
});

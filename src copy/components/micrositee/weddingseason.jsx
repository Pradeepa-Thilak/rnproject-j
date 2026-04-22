import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from '../micrositee/sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';
import ImageAndDescriptionComponent from './sections/ImageAndDescriptionComponent';
import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import GridImages from './sections/Gridimages';
import HeroBanner from '../HomePage/HeroBanner';
import Twocompswithimgdes from './sections/Twocompswithimgdes';
import Parawithtextimagebtn from './sections/Parawithtextimagebtn';
import Footer from '../../components/Footer';
import fonts from '../../assests/fonts';
const Weddingseason = () => {
  const [wsdata, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('wedding-season');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  console.log(wsdata);

  const sectionData = wsdata?.SectionDetails || [];

  return (
    <ScrollView style={{ backgroundColor: '#faf2e5' }}>
      <HeroBanner
        details={sectionData[0]}
        isHome={true}
        aspectRatio={360 / 563}
      />

      <ComponentWithHeaderAndGrid details={sectionData[2]} />
      <ImageHeaderAndGrid details={sectionData[3]} />
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[4]}
        AR={40 / 61}
      />

      {/* section-5*/}
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
        reverseimg={true}
      />

      {/* <BGImage details={sectionData[6]}/> */}
      {/* <ComponentWithImage_HeaderAndDescription details={sectionData[7]}/>  has 2 images*/}
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[8]}
        AR={32 / 49}
        imgar={939 / 946}
      />

      <Parawithtextimagebtn
        details={sectionData[9]}
        AR={32 / 49}
        bgImageStyle={{
          height: 515,
        }}
      />
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[10]}
        bgImage={false}
        imgar={939 / 946}
      />
      <BGImage details={sectionData[10]} />
      <Footer />
    </ScrollView>
  );
};

export default Weddingseason;

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

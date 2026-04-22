import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from '../micrositee/sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';
import ImageAndDescriptionComponent from '../micrositee/sections/ImageAndDescriptionComponent';
import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import Twocompswithimgdes from './sections/Twocompswithimgdes';
import BGImage from '../micrositee/sections/BGImage';
import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import Footer from '../../components/Footer';

const Coastal = () => {
  const [coastalData, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('coastal');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  console.log(coastalData);

  const sectionData = coastalData?.SectionDetails || [];

  console.log('Section', sectionData[9]);
  return (
    <ScrollView style={styles.container}>
      <Msiteherobanner
        details={sectionData[0]}
        imagestyle={styles.MsiteherobannerImage}
      />
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[1]}
        AR={32 / 49}
      />
      <ComponentWithHeaderAndGrid details={sectionData[2]} />
      <ImageHeaderAndGrid details={sectionData[3]} />
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[4]}
        AR={40 / 61}
      />
      <ImageAndDescriptionComponent details={sectionData[5]} />
      {/* section-5*/}
      {/* <BGImage details={sectionData[6]}/> */}
      {/* <ComponentWithImage_HeaderAndDescription details={sectionData[7]}/>  has 2 images*/}
      <Twocompswithimgdes details={sectionData[7]} AR={32 / 49} />
      <ComponentWithImage_HeaderAndDescription details={sectionData[8]} />
      <ComponentWithImage_HeaderAndDescription
        details={sectionData[10]}
        bgImage={false}
      />
      <BGImage details={sectionData[10]} />
      <Footer />
    </ScrollView>
  );
};

export default Coastal;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faf2e5',
  },
  MsiteherobannerImage: {
    width: '100%',
    aspectRatio: 360 / 564,
    resizeMode: 'cover',
  },
});

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from './sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';
import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import Footer from '../Footer';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';

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
    <ScreenWrapper>
      <ScrollView style={{ backgroundColor: colors.creamColor1 }}>
        <Msiteherobanner
          details={sectionData[0]}
          imagestyle={styles.Msitestyles}
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
    </ScreenWrapper>
  );
};

export default Utsav;

export const styles = StyleSheet.create({
  Msitestyles: {
    width: '100%',
    aspectRatio: 360 / 564,
    resizeMode: 'cover',
  },
});

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from './sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';

import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import Msiteherobanner from './sections/Msiteherobanner';

import Twocompswithimgdes from './sections/Twocompswithimgdes';
import Footer from '../Footer';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';

const Newarrival = () => {
  const [nwdata, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('newarrivals');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  console.log(nwdata);

  const sectionData = nwdata?.SectionDetails || [];

  return (
    <ScreenWrapper>
      <ScrollView style={{ backgroundColor: colors.creamColor1 }}>
        <Msiteherobanner
          details={sectionData[0]}
          imagestyle={styles.Msitestyle}
        />

        <ComponentWithHeaderAndGrid details={sectionData[2]} />
        <ImageHeaderAndGrid details={sectionData[3]} />
        <ComponentWithImage_HeaderAndDescription
          details={sectionData[4]}
          AR={40 / 61}
        />
        <Twocompswithimgdes details={sectionData[7]} AR={32 / 49} />
        <ComponentWithImage_HeaderAndDescription
          details={sectionData[10]}
          bgImage={false}
        />
        <BGImage details={sectionData[10]} />
        <Footer />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Newarrival;

export const styles = StyleSheet.create({
  Msitestyle: {
    width: '100%',
    aspectRatio: 360 / 650,
    resizeMode: 'cover',
  },
});

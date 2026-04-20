import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from './sections/ComponentWithImage_HeaderAndDescription';

import Anjumodicollection from '../micrositee/sections/anjumodicollection';
import Anjumodibanner from '../micrositee/sections/anjumodibanner';

import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import Footer from '../Footer';
import NewIn from './sections/NewIn';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';

const Theanjumodicollection = () => {
  const [coastalData, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('the-anju-modi-collection');
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
          imagestyle={styles.MsiteStyle}
        />
        <ComponentWithImage_HeaderAndDescription
          details={sectionData[1]}
          AR={32 / 49}
        />
        <Anjumodicollection details={sectionData[2]} buttonText="EXPLORE NOW" />
        <NewIn />
        <Anjumodibanner details={sectionData[3]} />
        <Footer />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Theanjumodicollection;

export const styles = StyleSheet.create({
  MsiteStyle: {
    width: '100%',
    aspectRatio: 375 / 287.5,
    resizeMode: 'cover',
  },
});

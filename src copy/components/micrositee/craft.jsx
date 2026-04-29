import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from './sections/ComponentWithImage_HeaderAndDescription';
import Anjumodicollection from '../micrositee/sections/anjumodicollection';
import Anjumodibanner from './sections/anjumodibanner';
import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import Footer from '../Footer';
import NewIn from './sections/NewIn';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';
import { HeroBannerSkeleton } from '../Skeleton';
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('coastal');
      if (data.msg === 'success') {
        setData(data.results);
      } else {
        console.log('Message: Failure');
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const HERO_SKELETON_AR = 375 / 287.5;
  console.log(coastalData);

  const sectionData = coastalData?.SectionDetails || [];

  console.log('Section', sectionData[9]);
  return (
    <ScreenWrapper>
      <ScrollView style={{ backgroundColor: colors.creamColor1 }}>
        {loading ? (
          <>
            <HeroBannerSkeleton aspectRatio={HERO_SKELETON_AR} />
          </>
        ) : (
          <>
            <Msiteherobanner
              details={sectionData[0]}
              imagestyle={styles.Msitestyle}
            />
            <ComponentWithImage_HeaderAndDescription
              details={sectionData[1]}
              aspectRatio={58 / 49}
              buttonText="VIEW ALL"
            />
            <Anjumodicollection
              details={sectionData[2]}
              buttonText="SHOP BY CRAFT"
            />
            <NewIn />
            <View style={styles.separator}></View>
            <Anjumodibanner details={sectionData[3]} />
            <NewIn />
            <View style={styles.separator}></View>
            <Anjumodicollection
              details={sectionData[4]}
              buttonText="SHOP BY CRAFT"
            />
            <View style={styles.separator}></View>
            <Anjumodicollection
              details={sectionData[5]}
              buttonText="SHOP BY CRAFT"
              seq4AR={1}
            />
            <NewIn />
            <View style={styles.separator}></View>
            <Anjumodicollection
              details={sectionData[6]}
              buttonText="SHOP BY CRAFT"
            />
            <NewIn />
            <Footer />
          </>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Craft;

export const styles = StyleSheet.create({
  Msitestyle: {
    width: '100%',
    aspectRatio: 375 / 287.5,
    resizeMode: 'cover',
  },
  separator: {
    height: 1,
    backgroundColor: '#0a0000',
    marginVertical: 20,
    marginHorizontal: 16,
  },
});

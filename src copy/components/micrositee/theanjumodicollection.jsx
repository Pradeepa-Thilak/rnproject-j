import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from './sections/ComponentWithImage_HeaderAndDescription';

import Anjumodicollection from '../micrositee/sections/anjumodicollection';
import Anjumodibanner from '../micrositee/sections/anjumodibanner';

import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import Footer from '../Footer';
import NewIn from './sections/NewIn';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';
import fonts from '../../../src/assests/fonts';
import { HeroBannerSkeleton } from '../Skeleton';
const Theanjumodicollection = () => {
  const [coastalData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('the-anju-modi-collection');
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
              imagestyle={styles.MsiteStyle}
            />
            <ComponentWithImage_HeaderAndDescription
              details={sectionData[1]}
              AR={80 / 49}
              buttonText="View All"
            />
            <View style={styles.headerContainer}>
              <View style={styles.line} />
              <Text style={styles.headerText}>
                SHOP THE FESTIVE{'\n'}
                DESIGNER{'\n'}
                COLLECTION
              </Text>
              <View style={styles.line} />
            </View>
            <Anjumodicollection
              details={sectionData[2]}
              buttonText="EXPLORE NOW"
            />
            <NewIn />
            <View style={styles.separator}></View>
            <Anjumodibanner details={sectionData[3]} />
            <Footer />
          </>
        )}
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
  separator: {
    height: 1,
    backgroundColor: '#0a0000',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 16,
  },

  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: fonts.EBGaramondRegular,
    letterSpacing: 2,
    color: '#616161',
    marginHorizontal: 12,
    fontWeight: '500',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#616161',
  },
});

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
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
import fonts from '../../assests/fonts';
const Craft = () => {
  const [coastalData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('craft');
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
      <ScrollView style={{ backgroundColor: colors.whiteColor1 }}>
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
              AR={58 / 49}
              buttonText="VIEW ALL"
            />
            <View style={styles.headerContainer}>
              <View style={styles.line} />
              <Text style={styles.headerText}> REGIONAL CRAFTS </Text>
              <View style={styles.line} />
            </View>
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
    backgroundColor: colors.blackColor1,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.EBGaramondRegular,
    letterSpacing: 2,
    color: colors.grayColor21,
    fontWeight: '500',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grayColor21,
  },
});

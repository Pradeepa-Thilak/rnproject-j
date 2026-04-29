import { ScrollView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShopByCategory from './sections/ShopByCategory';
import SeasonsFavorites from './sections/SeasonsFavorites';
import WearYourRoots from './sections/WearYourRoots';
import HalfBannerCard from './sections/HalfBannerCard';
import FeaturedCollections from './sections/FeaturedCollections';
import ShopByBrand from './sections/ShopByBrand';
import NewIn from './sections/NewIn';
import Msiteherobanner from './sections/Msiteherobanner';
import { getMicrositeData } from '../../api/micrositeApi';
import Footer from '../Footer';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';
import { HeroBannerSkeleton } from '../Skeleton';
const Springsummer = () => {
  const [eosdata, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('springsummer');
      if (data.msg === 'success') {
        setData(data.results);
      } else {
        console.log('Message: Failure');
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const HERO_SKELETON_AR = 90 / 83;
  const sectionData = eosdata?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);

  return (
    <ScreenWrapper>
      <ScrollView style={styles.screen}>
        {loading ? (
          <>
            <HeroBannerSkeleton aspectRatio={HERO_SKELETON_AR} />
          </>
        ) : (
          <>
            <Msiteherobanner
              details={getSection(1)}
              imagestyle={styles.imgstyle}
            />
            <ShopByCategory details={getSection(3)} />
            <SeasonsFavorites details={getSection(4)} />
            <WearYourRoots details={getSection(5)} />
            <SeasonsFavorites details={getSection(6)} />
            <WearYourRoots details={getSection(7)} />
            <SeasonsFavorites details={getSection(8)} />
            <WearYourRoots details={getSection(9)} />
            <SeasonsFavorites details={getSection(10)} />
            <WearYourRoots details={getSection(11)} />
            <SeasonsFavorites details={getSection(12)} />
            <WearYourRoots details={getSection(13)} />
            <SeasonsFavorites details={getSection(14)} />
            <WearYourRoots details={getSection(15)} />
            <SeasonsFavorites details={getSection(16)} />
            <HalfBannerCard
              positions={[19]}
              details={eosdata?.SectionDetails}
            />
            <FeaturedCollections details={getSection(20)} />
            <ShopByBrand details={getSection(21)} isNeeded={false} />
            <NewIn />
            <Footer />
          </>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.whiteColor1,
  },
  imgstyle: {
    width: '100%',
    aspectRatio: 90 / 83,
    resizeMode: 'cover',
  },
});

export default Springsummer;

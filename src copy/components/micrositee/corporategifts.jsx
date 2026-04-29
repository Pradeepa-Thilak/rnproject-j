import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import FeaturedCollections from '../micrositee/sections/FeaturedCollections';
import JourneySection from './sections/JourneySection/Index';
import Footer from '../Footer';
import { getMicrositeData } from '../../api/micrositeApi';
import ScreenWrapper from '../ScreenWrapper';
import { HeroBannerSkeleton } from '../Skeleton';
export default function CorporateGifts() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('corporategifts');
      if (res?.msg === 'success') {
        setData(res.results);
      } else {
        console.log('Message: Failure');
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const HERO_SKELETON_AR = 360 / 500;
  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <>
            <HeroBannerSkeleton aspectRatio={HERO_SKELETON_AR} />
          </>
        ) : (
          <>
            <Msiteherobanner
              details={getSection(1)}
              imagestyle={styles.Msitestyle}
            />
            <FeaturedCollections details={getSection(2)} />
            {sectionData.map((section, index) => {
              const name = section?.a_section_name?.toLowerCase() || '';
              if (name.includes('journey')) {
                return <JourneySection key={index} section={section} />;
              }
              return null;
            })}
            <Footer />
          </>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  Msitestyle: {
    width: '100%',
    aspectRatio: 360 / 500,
    resizeMode: 'cover',
  },
});

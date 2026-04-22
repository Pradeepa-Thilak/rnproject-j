import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Msiteherobanner from '../micrositee/sections/Msiteherobanner';
import FeaturedCollections from '../micrositee/sections/FeaturedCollections';
import JourneySection from './sections/JourneySection/Index';
import Footer from '../../components/Footer';
import { getMicrositeData } from '../../api/micrositeApi';
export default function CorporateGifts() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('corporategifts');
      if (res?.msg === 'success') {
        setData(res.results);
      }
    };
    fetchData();
  }, []);

  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* HERO */}
      <Msiteherobanner
        details={getSection(1)}
        imagestyle={{
          width: '100%',
          aspectRatio: 360 / 500,
          resizeMode: 'cover',
        }}
      />
      {/* FEATURED */}
      <FeaturedCollections details={getSection(2)} />
      {sectionData.map((section, index) => {
        const name = section?.a_section_name?.toLowerCase() || '';
        if (name.includes('journey')) {
          return <JourneySection key={index} section={section} />;
        }
        return null;
      })}
      {/* FOOTER */}
      <Footer />
    </ScrollView>
  );
}

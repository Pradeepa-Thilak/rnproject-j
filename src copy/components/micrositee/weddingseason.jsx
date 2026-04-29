import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from './sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';
import ImageAndDescriptionComponent from './sections/ImageAndDescriptionComponent';
import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import GridImages from './sections/Gridimages';
import HeroBanner from '../HomePage/HeroBanner';
import Twocompswithimgdes from './sections/Twocompswithimgdes';
import Parawithtextimagebtn from './sections/Parawithtextimagebtn';
import Footer from '../Footer';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';
import { HeroBannerSkeleton } from '../Skeleton';
const Weddingseason = () => {
  const [wsdata, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('wedding-season');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  console.log(wsdata);
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
  const HERO_SKELETON_AR = 360 / 563;
  const sectionData = wsdata?.SectionDetails || [];

  return (
    <ScreenWrapper>
      <ScrollView style={{ backgroundColor: colors.creamColor1 }}>
        {loading ? (
          <>
            <HeroBannerSkeleton aspectRatio={HERO_SKELETON_AR} />
          </>
        ) : (
          <>
            <HeroBanner
              details={sectionData[0]}
              isHome={true}
              aspectRatio={360 / 563}
            />
            <ComponentWithHeaderAndGrid details={sectionData[2]} />
            <ImageHeaderAndGrid details={sectionData[3]} />
            <ComponentWithImage_HeaderAndDescription
              details={sectionData[4]}
              AR={40 / 61}
            />
            <ImageAndDescriptionComponent details={sectionData[5]} />
            <GridImages
              data={sectionData[6]?.MediaDetails?.filter(
                (item) => item.a_media_type === 'Image',
              )?.map((item) => ({
                image: item.a_image,
                title: item.a_title,
              }))}
              spacing={20}
              imageStyle={styles.GridImgStyles}
              style={styles.GridStyles}
            />
            <Twocompswithimgdes
              details={sectionData[7]}
              AR={32 / 49}
              reverseimg={true}
            />
            <ComponentWithImage_HeaderAndDescription
              details={sectionData[8]}
              AR={32 / 49}
              imgar={939 / 946}
            />
            <Parawithtextimagebtn
              details={sectionData[9]}
              AR={32 / 49}
              bgImageStyle={styles.Parawithtextimagebtnstyle}
            />
            <ComponentWithImage_HeaderAndDescription
              details={sectionData[10]}
              bgImage={false}
              imgar={939 / 946}
            />
            <BGImage details={sectionData[10]} />
            <Footer />
          </>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Weddingseason;

export const styles = StyleSheet.create({
  GridImgStyles: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
  GridStyles: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  Parawithtextimagebtnstyle: {
    height: 515,
  },
});

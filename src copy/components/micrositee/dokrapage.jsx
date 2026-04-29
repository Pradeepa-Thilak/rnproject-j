import { ScrollView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import MsiteHeroBanner from '../../components/micrositee/sections/Msiteherobanner';
import BestSellers from '../../components/micrositee/sections/Bestsellers';
import Shopbyprice from '../../components/micrositee/sections/Shopbyprice';
import { decode } from 'html-entities';
import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import Footer from '../Footer';
import Supportingartisans from './sections/Supportingartisans';
import { getMicrositeData } from '../../api/micrositeApi';
import ScreenWrapper from '../ScreenWrapper';
import { HeroBannerSkeleton } from '../Skeleton';
export default function Dokra() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('dokra');
      if (res?.msg === 'success') {
        setData(res.results);
      } else {
        console.log('Message: Failure');
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const HERO_SKELETON_AR = 9 / 10;
  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);

  return (
    <ScreenWrapper>
      <ScrollView>
        {loading ? (
          <>
            <HeroBannerSkeleton aspectRatio={HERO_SKELETON_AR} />
          </>
        ) : (
          <>
            <MsiteHeroBanner
              details={getSection(1)}
              imagestyle={styles.Msitestyle}
            />
            <BestSellers
              details={getSection(4)}
              imgbgstyle={styles.BestSellersbgimgstyle}
              categoryconstyle={styles.BestSellersCategoryconstyle}
              titleimgstyle={styles.BestSellerstitleimgstyle}
              categorytopimgstyle={styles.BestSellersCategorytopimgstyle}
              parastyle={styles.BestSellersparastyle}
            />
            <MsiteHeroBanner
              details={getSection(5)}
              imagestyle={styles.Msitestyle1}
            />
            <Shopbyprice
              details={getSection(6)}
              titleimgstyle={styles.ShopByPricetitleimgstyle}
              transformData={(images) =>
                images
                  .filter((item) => item.a_title !== 'Bestseller')
                  .slice(0, 4)
                  .map((item) => ({
                    image: item.a_image,
                    title: decode(item.a_title)?.toUpperCase(),
                  }))
              }
            />
            <Supportingartisans
              apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=dokra&deviceType=mobile&shopId=26"
              position={7}
            />
            <LastingImpression
              details={getSection(8)}
              topIndex={1}
              bottomIndex={0}
              topitemstyle={styles.LastingImpressiontopimgstyle}
              bottomitemstyle={styles.LastingImpressionbottomimgstyle}
            />
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
    aspectRatio: 9 / 10,
    resizeMode: 'cover',
  },
  BestSellersbgimgstyle: {
    width: '100%',
    aspectRatio: 1080 / 329,
  },
  BestSellersCategoryconstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -120,
  },
  BestSellerstitleimgstyle: {
    aspectRatio: 177 / 38,
    width: '80%',
  },
  BestSellersCategorytopimgstyle: {
    width: '100%',
    aspectRatio: 939 / 946,
  },
  BestSellersparastyle: {
    paddingBottom: 20,
  },
  Msitestyle1: {
    width: '100%',
    aspectRatio: 1079 / 1652,
    resizeMode: 'cover',
  },
  ShopByPricetitleimgstyle: {
    width: '100%',
    aspectRatio: 595 / 124,
  },
  LastingImpressiontopimgstyle: {
    width: '80%',
    aspectRatio: 747 / 119,
  },
  LastingImpressionbottomimgstyle: {
    width: '100%',
    height: 200,
  },
});

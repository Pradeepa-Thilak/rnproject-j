import MsiteHeroBanner from './sections/Msiteherobanner';
import { ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect, React } from 'react';
import Category from './sections/Category';
import Popgiftcategory from './sections/Popgiftcategory';
import BestSellers from './sections/Bestsellers';
import ExploreCategories from './sections/ExploreCategories';
import ShopByPrice from './sections/Shopbyprice';
import Giftcards from './sections/Giftcards';
import LastingImpression from './sections/LastingImpression';
import Stories from './sections/Stories';
import Footer from '../Footer';
import { getMicrositeData } from '../../api/micrositeApi';
import { decode } from 'html-entities';
import ScreenWrapper from '../ScreenWrapper';
import { HeroBannerSkeleton } from '../Skeleton';
export default function Corporategifting() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('corporategifting');
      if (res?.msg === 'success') {
        setData(res.results);
      }
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
  const HERO_SKELETON_AR = 360 / 564;
  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
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
            <Category
              details={getSection(2)}
              imageStyle={styles.Categorystyle}
            />
            <Popgiftcategory details={getSection(3)} />
            <BestSellers
              details={getSection(4)}
              imgbgstyle={styles.BestsellerImgstyle}
              categoryconstyle={styles.Bestsellerconstyle}
              titleimgstyle={styles.BestsellertitleImgstyle}
              categorytopimgstyle={styles.Bestsellercategorytopimgstyle}
            />
            <ExploreCategories apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26" />
            <ShopByPrice
              details={getSection(6)}
              titleimgstyle={styles.ShopByPricetitleimgstyle}
              transformData={(images) =>
                images.slice(0, 4).map((item) => {
                  return {
                    image: item.a_image,
                    title: decode(item.a_title)?.toUpperCase(),
                  };
                })
              }
            />
            <Giftcards />
            <LastingImpression
              details={getSection(8)}
              topIndex={0}
              bottomIndex={1}
              topitemstyle={styles.LastingImpressiontopitemstyle}
              bottomitemstyle={styles.LastingImpressionbottomitemstyle}
            />
            <Stories apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26" />
            <Footer />
          </>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },
  Msitestyle: {
    width: '100%',
    aspectRatio: 360 / 564,
    resizeMode: 'cover',
  },
  Categorystyle: {
    width: '100%',
    aspectRatio: 799 / 1002,
    resizeMode: 'cover',
  },
  BestsellerImgstyle: {
    width: '100%',
    aspectRatio: 40 / 21,
  },
  Bestsellerconstyle: {
    position: 'absolute',
    top: 55,
    left: 20,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  BestsellertitleImgstyle: {
    aspectRatio: 97 / 30,
    width: '58%',
  },
  Bestsellercategorytopimgstyle: {
    width: '100%',
    aspectRatio: 329 / 331,
  },
  ShopByPricetitleimgstyle: {
    width: '100%',
    aspectRatio: 595 / 124,
  },
  LastingImpressiontopitemstyle: {
    width: '80%',
    aspectRatio: 747 / 119,
  },
  LastingImpressionbottomitemstyle: {
    width: '100%',
    aspectRatio: 396 / 235,
  },
});

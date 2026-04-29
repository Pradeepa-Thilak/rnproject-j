import HeroBanner from '../HomePage/HeroBanner';
import { ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect, React } from 'react';
import Category from './sections/Category';
import Popgiftcategory from './sections/Popgiftcategory';
import BestSellers from '../../components/micrositee/sections/Bestsellers';
import ShopByPrice from '../../components/micrositee/sections/Shopbyprice';
import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import Footer from '../Footer';
import { getMicrositeData } from '../../api/micrositeApi';
import { decode } from 'html-entities';
import ScreenWrapper from '../ScreenWrapper';
import { HeroBannerSkeleton } from '../Skeleton';
export default function Thegifteditpage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('the-gifting-edit');
      if (res?.msg === 'success') {
        setData(res.results);
      } else {
        console.log('Message: Failure');
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const HERO_SKELETON_AR = 360 / 400;
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
            <HeroBanner
              details={getSection(1)}
              isHome={true}
              aspectRatio={360 / 400}
            />
            <Category
              details={getSection(2)}
              imageStyle={styles.CategoryStyle}
            />
            <Popgiftcategory details={getSection(3)} />
            <BestSellers
              details={getSection(4)}
              imgbgstyle={styles.BestSellers}
              categoryconstyle={styles.categoryconstyle}
              titleimgstyle={styles.titleimgstyle}
              categorytopimgstyle={styles.categorytopimgstyle}
            />
            <ShopByPrice
              details={getSection(6)}
              titleimgstyle={styles.ShopByPricetitleImg}
              transformData={(images) =>
                images
                  .filter((item) => {
                    const seq = Number(item.a_sequence);
                    return seq >= 1 && seq <= 4;
                  })
                  .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
                  .map((item) => {
                    return {
                      image: item.a_image,
                      title: decode(item.a_title)?.toUpperCase(),
                    };
                  })
              }
            />
            <LastingImpression
              details={getSection(8)}
              topIndex={0}
              bottomIndex={2}
              topitemstyle={styles.LastingImpressiontopItemStyle}
              bottomitemstyle={styles.LastingImpressionBottomItemStyle}
            />
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
  CategoryStyle: {
    width: '100%',
    aspectRatio: 799 / 1002,
    resizeMode: 'cover',
  },
  BestSellers: {
    width: '100%',
    aspectRatio: 40 / 21,
  },
  categoryconstyle: {
    position: 'absolute',
    top: 55,
    left: 20,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  titleimgstyle: {
    aspectRatio: 414 / 119,
    width: '58%',
  },
  categorytopimgstyle: {
    width: '100%',
    aspectRatio: 329 / 331,
  },
  ShopByPricetitleImg: {
    width: '100%',
    aspectRatio: 595 / 124,
  },
  LastingImpressiontopItemStyle: {
    width: '80%',
    aspectRatio: 747 / 119,
  },
  LastingImpressionBottomItemStyle: {
    width: '100%',
    height: 200,
  },
});

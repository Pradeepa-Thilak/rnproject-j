import { ScrollView, StyleSheet } from 'react-native';
import MsiteHeroBanner from '../../components/micrositee/sections/Msiteherobanner';
import Category from './sections/Category';
import Popgiftcategory from './sections/Popgiftcategory';
import BestSellers from '../../components/micrositee/sections/Bestsellers';
import Shopbyprice from '../../components/micrositee/sections/Shopbyprice';
import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import Footer from '../Footer';
import { useState, useEffect, React } from 'react';
import { decode } from 'html-entities';
import { getMicrositeData } from '../../api/micrositeApi';
import ScreenWrapper from '../ScreenWrapper';
export default function Houseoffashionjewelry() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('house-of-fashion-jewelry');
      if (res?.msg === 'success') {
        setData(res.results);
      }
    };
    fetchData();
  }, []);

  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);
  return (
    <ScreenWrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <MsiteHeroBanner
          details={getSection(1)}
          imagestyle={styles.Msitestyle}
        />
        <Category
          details={getSection(2)}
          imageStyle={styles.CategoryImgstyle}
        />
        <Popgiftcategory details={getSection(3)} />
        <BestSellers
          details={getSection(4)}
          imgbgstyle={styles.BestsellerImgstyle}
          categoryconstyle={styles.BestsellerCategoryconstyle}
          titleimgstyle={styles.BestSellerstitleImgstyle}
          categorytopimgstyle={styles.BestSellersCategorytopimgstyle}
        />
        <Shopbyprice
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
        <LastingImpression
          details={getSection(8)}
          topIndex={1}
          bottomIndex={0}
          topitemstyle={styles.LastingImpressiontopitemstyle}
          bottomitemstyle={styles.LastingImpressionbottomitemstyle}
        />
        <Footer />
      </ScrollView>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Msitestyle: {
    width: '100%',
    aspectRatio: 420 / 551,
    resizeMode: 'cover',
  },
  CategoryImgstyle: {
    width: '100%',
    aspectRatio: 799 / 1002,
    resizeMode: 'cover',
  },
  BestsellerImgstyle: {
    width: '100%',
    aspectRatio: 40 / 21,
  },
  BestsellerCategoryconstyle: {
    position: 'absolute',
    top: 55,
    left: 20,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  BestSellerstitleImgstyle: {
    aspectRatio: 97 / 30,
    width: '58%',
  },
  BestSellersCategorytopimgstyle: {
    width: '100%',
    aspectRatio: 329 / 331,
  },
  ShopByPricetitleimgstyle: {
    width: '100%',
    aspectRatio: 595 / 124,
  },
  LastingImpressiontopitemstyle: {
    width: '100%',
    aspectRatio: 1080 / 101,
  },
  LastingImpressionbottomitemstyle: {
    width: '100%',
    aspectRatio: 396 / 235,
  },
});

import MsiteHeroBanner from '../../components/micrositee/sections/Msiteherobanner';
import { ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect, React } from 'react';
import Category from './sections/Category';
import Popgiftcategory from './sections/Popgiftcategory';
import BestSellers from '../../components/micrositee/sections/Bestsellers';

import ShopByPrice from '../../components/micrositee/sections/Shopbyprice';

import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import { getMicrositeData } from '../../api/micrositeApi';
import Footer from '../Footer';
import { decode } from 'html-entities';
import ScreenWrapper from '../ScreenWrapper';
export default function Houseofsilver() {
  const [hsdata, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('house-of-silver');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  const sectionData = hsdata?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <MsiteHeroBanner
          details={getSection(1)}
          imagestyle={styles.Msitestyle}
          pos={1}
        />
        <Category
          details={getSection(2)}
          imageStyle={styles.CategoryImgStyle}
        />
        <Popgiftcategory details={getSection(3)} />
        <BestSellers
          details={getSection(4)}
          imgbgstyle={styles.BestSellersimgbgstyle}
          categoryconstyle={styles.BestSellersCategoryconstyle}
          titleimgstyle={styles.BestSellerstitleimgstyle}
          categorytopimgstyle={styles.BestSellerscategorytopimgstyle}
        />

        <ShopByPrice
          details={getSection(6)}
          titleimgstyle={styles.ShopByPricetitleImgstyle}
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
          topIndex={2}
          bottomIndex={1}
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
    height: '100%',
    flex: 1,
  },
  Msitestyle: {
    width: '100%',
    aspectRatio: 360 / 400,
    resizeMode: 'cover',
  },
  CategoryImgStyle: {
    width: '100%',
    aspectRatio: 799 / 1004,
    resizeMode: 'cover',
  },
  BestSellersimgbgstyle: {
    width: 65,
    height: 190,
  },
  BestSellersCategoryconstyle: {
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  BestSellerstitleimgstyle: {
    aspectRatio: 97 / 30,
    width: '58%',
  },
  BestSellerscategorytopimgstyle: {
    width: '100%',
    aspectRatio: 329 / 331,
  },
  ShopByPricetitleImgstyle: {
    width: '100%',
    aspectRatio: 595 / 124,
  },
  LastingImpressiontopitemstyle: {
    width: '65%',
    aspectRatio: 67 / 12,
  },
  LastingImpressionbottomitemstyle: {
    width: '100%',
    aspectRatio: 396 / 235,
  },
});

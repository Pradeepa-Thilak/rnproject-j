import { ScrollView, Image, View, StyleSheet } from 'react-native';
import MsiteHeroBanner from '../../components/micrositee/sections/Msiteherobanner';
import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import Footer from '../Footer';
import { useState, useEffect, React } from 'react';
import GridImageswithTitle from './sections/GridImageswithTitle';
import { getMicrositeData } from '../../api/micrositeApi';
import GiftGridSection from '../../components/micrositee/sections/GiftGridSection';

export default function Gifts() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('gifts');
      if (res?.msg === 'success') {
        setData(res.results);
      }
    };
    fetchData();
  }, []);

  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MsiteHeroBanner details={getSection(1)} imagestyle={styles.Msitestyle} />
      <GridImageswithTitle
        details={getSection(2)}
        spacing={20}
        showTitle={false}
        SectionName={false}
        itemWidth="47%"
        imageStyle={styles.GridImageswithTitleImgstyle}
        style={styles.GridImageswithTitlestyle}
      />
      <GiftGridSection details={getSection(3)} />
      <GridImageswithTitle
        details={getSection(4)}
        imageStyle={styles.GridImageswithTitleImgstyle1}
        style={styles.GridImageswithTitlestyle1}
      />
      <View style={styles.ImgContainer}>
        <Image
          source={{
            uri: 'https://assets.abfrlcdn.com/img/app/brands/tasva/gift_assets/mobile/Group%207143.png',
          }}
          style={styles.ImgStyle}
        />
      </View>
      <LastingImpression
        details={getSection(5)}
        bottomIndex={0}
        topitemstyle={styles.LastingImpressiontopitemstyle}
        bottomitemstyle={styles.LastingImpressionbottomitemstyle}
      />
      <Footer />
    </ScrollView>
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
  GridImageswithTitleImgstyle: {
    width: '55%',
    marginHorizontal: 60,
    aspectRatio: 1 / 1,
    marginBottom: 20,
  },
  GridImageswithTitlestyle: {
    marginHorizontal: 75,
    marginTop: 24,
  },
  GridImageswithTitleImgstyle1: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  GridImageswithTitlestyle1: {
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  ImgContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  ImgStyle: {
    width: 142,
    height: 20,
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

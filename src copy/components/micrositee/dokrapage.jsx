import { ScrollView } from 'react-native-gesture-handler';

import MsiteHeroBanner from '../../components/micrositee/sections/Msiteherobanner';
import BestSellers from '../../components/micrositee/sections/Bestsellers';
import Shopbyprice from '../../components/micrositee/sections/Shopbyprice';
import { decode } from 'html-entities';
import { useState, useEffect } from 'react';
import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import Footer from '../Footer';
import Supportingartisans from '../../components/micrositee/sections/Supportingartisans';
import { getMicrositeData } from '../../api/micrositeApi';
export default function Dokra() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('dokra');
      if (res?.msg === 'success') {
        setData(res.results);
      }
    };
    fetchData();
  }, []);

  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);

  return (
    <ScrollView>
      <MsiteHeroBanner
        details={getSection(1)}
        imagestyle={{
          width: '100%',
          aspectRatio: 9 / 10,
          resizeMode: 'cover',
        }}
      />
      <BestSellers
        details={getSection(4)}
        imgbgstyle={{
          width: '100%',
          aspectRatio: 1080 / 329,
        }}
        categoryconstyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -120,
        }}
        titleimgstyle={{
          aspectRatio: 177 / 38,
          width: '80%',
        }}
        categorytopimgstyle={{
          width: '100%',
          aspectRatio: 939 / 946,
        }}
        parastyle={{ paddingBottom: 20 }}
      />
      <MsiteHeroBanner
        details={getSection(5)}
        imagestyle={{
          width: '100%',
          aspectRatio: 1079 / 1652,
          resizeMode: 'cover',
        }}
      />

      <Shopbyprice
        details={getSection(6)}
        titleimgstyle={{ width: '100%', aspectRatio: 595 / 124 }}
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
        topitemstyle={{ width: '80%', aspectRatio: 747 / 119 }}
        bottomitemstyle={{ width: '100%', height: 200 }}
      />
      <Footer />
    </ScrollView>
  );
}

import React from 'react';
import { ScrollView } from 'react-native';
import MsiteHeroBanner from '../../components/micrositee/sections/Msiteherobanner';
import Category from '../../components/micrositee/sections/Category';
import Popgiftcategory from '../../components/micrositee/sections/Popgiftcategory';
import BestSellers from '../../components/micrositee/sections/Bestsellers';
import Shopbyprice from '../../components/micrositee/sections/Shopbyprice';
import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import { getMicrositeData } from '../../api/micrositeApi';
export default function SareeStore() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData('the-saree-store');
      if (res?.msg === 'success') {
        setData(res.results);
      }
    };
    fetchData();
  }, []);

  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) => sectionData.find((sec) => sec.position === pos);
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* 🔹 HERO BANNER */}
      <MsiteHeroBanner
        details={getSection(1)}
        imagestyle={{
          width: '100%',
          aspectRatio: 420 / 551,
          resizeMode: 'cover',
        }}
      />
      🔹 SHOP BY OCCASION
      <Category
        details={getSection(2)}
        imageStyle={{
          width: '100%',
          aspectRatio: 799 / 1002,
          resizeMode: 'cover',
        }}
      />
      {/* 🔹 SHOP BY CRAFT */}
      <Popgiftcategory details={getSection(3)} />
      {/* 🔹 SHOP BY FABRIC */}
      <BestSellers
        details={getSection(4)}
        imgbgstyle={{
          width: '40%',
          aspectRatio: 20 / 21,
        }}
        categoryconstyle={{
          position: 'absolute',
          top: 50,
          left: 20,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}
        titleimgstyle={{
          aspectRatio: 97 / 30,
          width: '58%',
        }}
        categorytopimgstyle={{ width: '100%', aspectRatio: 329 / 331 }}
      />
      {/* 🔹 SHOP BY COLOR */}
      <Shopbyprice
        details={getSection(6)}
        titleimgstyle={{ width: '100%', aspectRatio: 595 / 124 }}
        transformData={(images) =>
          images.slice(0, 4).map((item) => {
            return {
              image: item.a_image,
              title: decode(item.a_title)?.toUpperCase(),
            };
          })
        }
      />
      {/* 🔹 LAST SECTION (VIDEO) */}
      <LastingImpression
        details={getSection(8)}
        topIndex={1}
        bottomIndex={0}
        topitemstyle={{ width: '80%', aspectRatio: 747 / 119 }}
        bottomitemstyle={{ width: '100%', aspectRatio: 396 / 235 }}
      />
      <Footer />
    </ScrollView>
  );
}

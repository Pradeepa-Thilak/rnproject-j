import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import VideoSection from '../micrositee/sections/VideoSection';
import Footer from '../../components/Footer';
const SareeStore = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      'https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-saree-store&deviceType=mobile&shopId=26'
    )
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err));
  }, []);
  if (!data) return <ActivityIndicator size="large" />;
  const sections = data?.results?.SectionDetails || [];
  return (
    <ScrollView style={{ flex: 1 }}>

      {/* ✅ HERO BANNER */}
      <MsiteHeroBanner
        apiUrl={api}
        imagestyle={{
          width: "100%",
          aspectRatio: 360 / 551,
          resizeMode: "cover",
        }}
        pos={1}
      />

      {/* ✅ SHOP BY OCCASION */}
      <Category
        apiUrl={api}
        pos={2}
        imageStyle={{
          width: "100%",
          aspectRatio: 799 / 1002,
          resizeMode: "cover",
        }}
      />

      {/* ✅ SHOP BY CRAFT */}
      <Popgiftcategory
        apiUrl={api}
        pos={3}
      />

      {/* ✅ SHOP BY FABRIC */}
      <BestSellers
        apiUrl={api}
        pos={4}
        transformData={(images) =>
          images.slice(1, 5).map(item => item.a_image)
        }
      />

      {/* ✅ SHOP BY COLOR */}
      <Shopbyprice
        apiUrl={api}
        pos={6}
        transformData={(images) =>
          images.slice(1, 5).map(item => ({
            image: item.a_image,
            title: decode(item.a_title)?.toUpperCase()
          }))
        }
      />

      {/* ✅ VIDEO LAST */}
      <LastingImpression
        apiUrl={api}
        topIndex={2}
        bottomIndex={3}
        topitemstyle={{
          width: "80%",
          aspectRatio: 747 / 119,
        }}
        bottomitemstyle={{
          width: "100%",
          aspectRatio: 396 / 235,
        }}
      />

      <Footer />

    </ScrollView>
  );
}
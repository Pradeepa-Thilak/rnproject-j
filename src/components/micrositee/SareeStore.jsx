import React from 'react';
import { ScrollView } from 'react-native';
import MsiteHeroBanner from "../../components/micrositee/sections/Msiteherobanner";
import Category from "../../components/micrositee/sections/Category";
import Popgiftcategory from "../../components/micrositee/sections/Popgiftcategory";
import BestSellers from "../../components/micrositee/sections/Bestsellers";
import Shopbyprice from "../../components/micrositee/sections/Shopbyprice";
import LastingImpression from "../../components/micrositee/sections/LastingImpression";
import Footer from '../../components/Footer';
import { decode } from "html-entities";
const API =
  "https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-saree-store&deviceType=mobile&shopId=26";
export default function SareeStore() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* 🔹 HERO BANNER */}
      <MsiteHeroBanner
        apiUrl={API}
        imagestyle={{
          width: "100%",
          aspectRatio: 420 / 551,
          resizeMode: "cover",
        }}
        pos={1}
      />
      {/* 🔹 SHOP BY OCCASION */}
      <Category
        apiUrl={API}
        pos={2}
        imageStyle={{
          width: "100%",
          aspectRatio: 799 / 1002,
          resizeMode: "cover",
        }}
      />
      {/* 🔹 SHOP BY CRAFT */}
      <Popgiftcategory
        apiUrl={API}
        pos={3}
      />
      {/* 🔹 SHOP BY FABRIC */}
      <BestSellers
        apiUrl={API}
        pos={4}
        para={"WW91IGFyZSB0aGUgY3JlYXRvciwgdGhlIG51cnR1cmVyLCB0aGUgaGVhcnQgb2YgZXZlcnkgY2VsZWJyYXRpb24uIFdoZXRoZXIgeW91J3JlIGEgZ3Vlc3Qgb3IgdGhlIGJyaWRlY2FsbCdzIGZhdm91cml0ZSBzaXN0ZXIsIHdyYXAgeW91cnNlbGYgaW4gYSBkcmFwZSBib3JuIG9mIGFnZS1vbGQgY3JhZnQgYW5kIHRpbWVsZXNzIGdyYWNlLg=="}
        parastyle={{
          textAlign: "center",
          marginTop: 10,
        }}
        categoryconstyle={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: -120,   
        }}
        transformData={(images) =>
          images.slice(1, 5).map(item => item.a_image)
        }
      />
      {/* 🔹 SHOP BY COLOR */}
      <Shopbyprice
        apiUrl={API}
        pos={6}
        transformData={(images) =>
          images.slice(1, 5).map(item => ({
            image: item.a_image,
            title: decode(item.a_title)?.toUpperCase()
          }))
        }
      />
      {/* 🔹 LAST SECTION (VIDEO) */}
      <LastingImpression
        apiUrl={API}
        pos={8}
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
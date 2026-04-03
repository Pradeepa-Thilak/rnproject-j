import { ScrollView } from "react-native";

import MsiteHeroBanner from "../../components/micrositee/sections/Msiteherobanner";
import Category from "../../components/micrositee/sections/Category";
import Popgiftcategory from "../../components/micrositee/sections/Popgiftcategory";
import BestSellers from "../../components/micrositee/sections/Bestsellers";
import Shopbyprice from "../../components/micrositee/sections/Shopbyprice";
import LastingImpression from "../../components/micrositee/sections/LastingImpression";

import Footer from "../../components/Footer";
import { decode } from "html-entities";

export default function SareeStore() {

  const api =
    "https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-saree-store&deviceType=mobile&shopId=26";

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
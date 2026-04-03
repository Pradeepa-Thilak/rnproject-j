import { ScrollView } from "react-native";
import MsiteHeroBanner from "../../components/micrositee/sections/Msiteherobanner";
import Category from "../../components/micrositee/sections/Category";
import Popgiftcategory from "../../components/micrositee/sections/Popgiftcategory";
import BestSellers from "../../components/micrositee/sections/Bestsellers";
import ExploreCategories from "../../components/micrositee/sections/ExploreCategories";
import ShopByPrice from "../../components/micrositee/sections/Shopbyprice";
import LastingImpression from "../../components/micrositee/sections/LastingImpression";
import Footer from "../../components/Footer";
import { decode } from "html-entities";
export default function SareeStore() {
  const api =
    "https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-saree-store&deviceType=mobile&shopId=26";
  return (
    <ScrollView style={{ height: "100%", flex: 1 }}>
      {/*  HERO */}
      <MsiteHeroBanner
        apiUrl={api}
        imagestyle={{
          width: "100%",
          aspectRatio: 360 / 551,
          resizeMode: "cover",
        }}
        pos={1}
      />
      {/*  SHOP BY OCCASION */}
      <Category
        apiUrl={api}
        imageStyle={{
          width: "100%",
          aspectRatio: 799 / 1002,
          resizeMode: "cover",
        }}
        pos={2}
      />
      {/*  SHOP BY CRAFT */}
      <Popgiftcategory
        apiUrl={api}
        pos={3}
      />
      {/*  SHOP BY FABRIC */}
      <BestSellers
        apiUrl={api}
        pos={4}
        transformData={(images) =>
          images.slice(1, 5).map(item => item.a_image)
        }
      />
      <ExploreCategories apiUrl={api} />
      {/*  SHOP BY COLOR */}
      <ShopByPrice
        apiUrl={api}
        pos={6}
        transformData={(images) =>
          images.slice(1, 5).map(item => ({
            image: item.a_image,
            title: decode(item.a_title)?.toUpperCase()
          }))
        }
      />
      {/*  VIDEO ALWAYS LAST */}
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
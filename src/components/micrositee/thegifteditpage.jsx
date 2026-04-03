import {View,Text,Image} from "react-native"
import HeroBanner from "../HomePage/HeroBanner"
import { ScrollView } from "react-native-gesture-handler"
import Category from "../../components/micrositee/sections/Category"
import Popgiftcategory from "../../components/micrositee/sections/Popgiftcategory"
import BestSellers from "../../components/micrositee/sections/Bestsellers"
import ExploreCategories from "../../components/micrositee/sections/ExploreCategories"
import  ShopByPrice  from "../../components/micrositee/sections/Shopbyprice"
import Giftcards from "../../components/micrositee/sections/Giftcards"
import LastingImpression from "../../components/micrositee/sections/LastingImpression"
import Stories from "../../components/micrositee/sections/Stories"
import Footer from "../../components/Footer"
import { decode } from "html-entities";

export default function Thegifteditpage(){
    return(
        <ScrollView style={{height:"100%",flex:1}}>
          <HeroBanner
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-gifting-edit&deviceType=mobile&shopId=26"
isHome={true}
aspectRatio={360/400}
  pos={1}
/>
  <Category
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-gifting-edit&deviceType=mobile&shopId=26"

  imageStyle={{
    width: "100%",
    aspectRatio: 799 / 1002,   
    resizeMode: "cover",
  }}
  pos={2}/>
  <Popgiftcategory
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-gifting-edit&deviceType=mobile&shopId=26"
  pos={3}
  />
  <BestSellers
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-gifting-edit&deviceType=mobile&shopId=26"
   imgbguri="https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Shop_By_craft-BG_3771_1756112847256.png"
   imgbgstyle={{
          width: '100%',
          aspectRatio: 40 / 21,
        }}
        categoryconstyle={{
              position:"absolute",
          top:55,
          left:20,
          right:0,
          bottom:0,
          alignItems:"center"
        }}
   titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/M-Shoip_By_Craft_3771_1756111880003.png"
   titleimgstyle={{
      aspectRatio:414 / 119,
   width:"58%"
   }}
   para={"Q2FycnkgSW5kaWEncyBzb3VsIGFuZCBsZWdhY3kgaW4gdGhlIHJ1c3RpYyBnbG93IG9mIERva3JhLCB0aGUgd2VsbG5lc3Mgb2YgQnJhc3MgJiBLYW5zYSwgdGhlIGNhbG0gb2YgTWFyYmxlLCB0aGUgY2hhcm0gb2YgQ2VyYW1pYyAmIHRoZSBncmFjZSBvZiBNYW5nbyB3b29kIC0gdGltZWxlc3MgZ2lmdHMgZm9yIGV2ZXJ5IG9jY2FzaW9u"}
   categorytopimg={"https://imagescdn.jaypore.com/uploads/micrositmedia/production/1_M-Dhokra-Shop-By-Craft_3771_1756809232521.jpg"}
   categorytopimgstyle={{width:"100%",
                aspectRatio:329/331
            }}
            pos={4}
              transformData={(images) =>
    images.slice(4, 8).map(item => item.a_image)
  }
  

  />
 
  <ShopByPrice
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-gifting-edit&deviceType=mobile&shopId=26"
   titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_40_1_4320_1721037594047_3771_1730194380559.png"
   titleimgstyle={{width:"100%",
                        aspectRatio:595/124}}
    pos={6}
   
transformData={(images) =>
  images
    .filter(item => {
      const seq = Number(item.a_sequence);
      return seq >= 1 && seq <= 4;
    })
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
    .map(item => {
      return {
        image: item.a_image,
        title: decode(item.a_title)?.toUpperCase()
      };
    })
}

  />

 <LastingImpression
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-gifting-edit&deviceType=mobile&shopId=26"
   topIndex={0}
  bottomIndex={2}
  topitemstyle={{width:"80%",
                aspectRatio:747/119
            }}
            bottomitemstyle={{ width: "100%", height:200}}
 />

  <Footer/>
        </ScrollView>
    )
}
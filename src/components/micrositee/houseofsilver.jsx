import {View,Text,Image} from "react-native"
import MsiteHeroBanner from "../../components/micrositee/sections/Msiteherobanner"
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
export default function Houseofsilver(){
    return(
        <ScrollView style={{height:"100%",flex:1}}>
          <MsiteHeroBanner
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=house-of-silver&deviceType=mobile&shopId=26"

  imagestyle={{
    width: "100%",
 
    aspectRatio: 360 / 400,
    resizeMode: "cover",
  }}
  pos={1}
/>
  <Category
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=house-of-silver&deviceType=mobile&shopId=26"

  imageStyle={{
    width: "100%",
    aspectRatio: 799 / 1004,   
    resizeMode: "cover",
  }}
  pos={2}/>
  <Popgiftcategory
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=house-of-silver&deviceType=mobile&shopId=26"
pos={3}
  />
  <BestSellers
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=house-of-silver&deviceType=mobile&shopId=26"
   imgbguri='https://imagescdn.jaypore.com/uploads/micrositmedia/production/shop_by_craft_bakground_3771_1755151418754.png'
   imgbgstyle={{
          width: 65,
          height:190
        }}
        categoryconstyle={{
          position:"absolute",
          top:55,
          left:0,
          right:0,
          bottom:0,
          alignItems:"center"
        }}
   titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/shop_by_craft_mobile_3771_1755143417855.png"
   titleimgstyle={{
      aspectRatio:97/30,
   width:"58%"
   }}
   para={"Q3JhZnRlZCB3aXRoIHBhdGllbmNlICYgcGFzc2VkIGRvd24gdGhyb3VnaCBnZW5lcmF0aW9ucywgb3VyIGpld2VscyBlbWJvZHkgdGhlIHJpY2huZXNzIG9mIEluZGlhJ3MgY3VsdHVyYWwgaGVyaXRhZ2UuIEVhY2ggcGllY2UgcmVmbGVjdHMgcGFzc2lvbiwgcHVycG9zZSAmIHRoZSBwdXJzdWl0IG9mIHRpbWVsZXNzIGJlYXV0eSBpbiBzaWx2ZXIgY3JhZnRzbWFuc2hpcC4="}
   categorytopimg={"https://imagescdn.jaypore.com/uploads/micrositmedia/production/1_HOS_M_bestsellers_3771_1754994535668.jpg"}
   categorytopimgstyle={{width:"100%",
                aspectRatio:329/331
            }}
            pos={4}
             transformData={(images) =>
  images
    .filter(item =>
      item.a_media_type === "Image" &&
      item.a_image &&
      Number(item.a_sequence) > 0 
    )
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence)) 
    .slice(1, 6)
    .map(item => item.a_image)
}
  

  />
 
  <ShopByPrice
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=house-of-silver&deviceType=mobile&shopId=26"
   titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/1shopbystyleNEW_3771_1755143561390.png"
   titleimgstyle={{width:"100%",
                        aspectRatio:595/124}}
    pos={6}
   
   transformData={(images) =>
  images.slice(1, 5).map(item => {
    return {
      image: item.a_image,
      title: decode(item.a_title)?.toUpperCase()
    };
  })
}

  />
 
 <LastingImpression
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=house-of-silver&deviceType=mobile&shopId=26"
  topIndex={2}
  bottomIndex={1}
  topitemstyle={{width:"65%",
                aspectRatio:67/12
            }}
            bottomitemstyle={{ width: "100%", aspectRatio: 396 / 235 }}

 />

  <Footer/>
        </ScrollView>
    )
}
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
export default function Corporategifting(){
    return(
        <ScrollView style={{height:"100%",flex:1}}>
          <MsiteHeroBanner
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  imagestyle={{
    width: "100%",
 
    aspectRatio: 360 / 551,
    resizeMode: "cover",
  }}
  pos={1}
/>
  <Category
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  imageStyle={{
    width: "100%",
    aspectRatio: 799 / 1002,   
    resizeMode: "cover",
  }}
  pos={2}/>
  <Popgiftcategory
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"
pos={3}
  />
  <BestSellers
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"
   imgbguri='https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_34_1_19_1720702545060_3771_1730193758835.png'
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
   titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/Our_Bestsellers2x_19_1720702707071_3771_1730195857261.png"
   titleimgstyle={{
      aspectRatio:97/30,
   width:"58%"
   }}
   para={"QSBjdXJhdGVkIGNvbGxlY3Rpb24gb2YgdGltZWxlc3MgdHJlYXN1cmVzIHRoYXQgaGF2ZSBjYXB0dXJlZCBoZWFydHMgZmFyICYgd2lkZS4gRWxldmF0ZSB5b3VyIHN0eWxlIHdpdGggb3VyIG1vc3QtbG92ZWQgcGlja3MgJiBtYWtlIGV2ZXJ5IG1vbWVudCBleHRyYW9yZGluYXJ5LiBEaXNjb3ZlciBKYXlwb3JlJ3MgdG9wIHBpY2tzICYgaW5kdWxnZSBpbiB0aGUgYXJ0IG9mIGN1cmF0ZWQgZXhjZWxsZW5jZS4="}
   categorytopimg={"https://imagescdn.jaypore.com/uploads/micrositmedia/production/13_Top_Banner_19_1720682525223_3771_1729683128121.jpg"}
   categorytopimgstyle={{width:"100%",
                aspectRatio:329/331
            }}
            pos={4}
              transformData={(images) =>
    images.slice(2, 6).map(item => item.a_image)
  }
  

  />
  <ExploreCategories
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  />
  <ShopByPrice
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"
   titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_40_1_4320_1721037594047_3771_1730194380559.png"
   titleimgstyle={{width:"100%",
                        aspectRatio:595/124}}
    pos={6}
   
   transformData={(images) =>
  images.slice(0, 4).map(item => {
    return {
      image: item.a_image,
      title: decode(item.a_title)?.toUpperCase()
    };
  })
}

  />
 <Giftcards/>
 <LastingImpression
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"
  topIndex={0}
  bottomIndex={1}
  topitemstyle={{width:"80%",
                aspectRatio:747/119
            }}
            bottomitemstyle={{ width: "100%", aspectRatio: 396 / 235 }}

 />
 <Stories 
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"
 />
  <Footer/>
        </ScrollView>
    )
}
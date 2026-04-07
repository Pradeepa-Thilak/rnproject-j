import {View,Text,Image} from "react-native"
import HeroBanner from "../HomePage/HeroBanner"
import { ScrollView } from "react-native-gesture-handler"
import { useState,useEffect } from "react"
import Category from "../../components/micrositee/sections/Category"
import Popgiftcategory from "../../components/micrositee/sections/Popgiftcategory"
import BestSellers from "../../components/micrositee/sections/Bestsellers"
import ExploreCategories from "../../components/micrositee/sections/ExploreCategories"
import  ShopByPrice  from "../../components/micrositee/sections/Shopbyprice"
import Giftcards from "../../components/micrositee/sections/Giftcards"
import LastingImpression from "../../components/micrositee/sections/LastingImpression"
import Stories from "../../components/micrositee/sections/Stories"
import Footer from "../../components/Footer"
import { getMicrositeData } from "../../api/micrositeApi"
import { decode } from "html-entities";

export default function Thegifteditpage(){
   const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData("the-gifting-edit");
      if (res?.msg === "success") {
        setData(res.results);
      }
    };
    fetchData();
  }, []);
  
  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) =>
    sectionData.find(sec => sec.position === pos);
  
    return(
        <ScrollView style={{height:"100%",flex:1}}>
          <HeroBanner
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-gifting-edit&deviceType=mobile&shopId=26"
isHome={true}
aspectRatio={360/400}
  pos={1}
/>
  <Category
     details={getSection(2)}

  imageStyle={{
    width: "100%",
    aspectRatio: 799 / 1002,   
    resizeMode: "cover",
  }}
  />
  <Popgiftcategory
      details={getSection(3)}
  />
  <BestSellers
   details={getSection(4)}
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
 
   titleimgstyle={{
      aspectRatio:414 / 119,
   width:"58%"
   }}
  
   categorytopimgstyle={{width:"100%",
                aspectRatio:329/331
            }}
       

  />
 
  <ShopByPrice
   details={getSection(6)}
   titleimgstyle={{width:"100%",
                        aspectRatio:595/124}}
   
   
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
   details={getSection(8)}
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
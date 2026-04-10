import {View,Text,Image} from "react-native"
import MsiteHeroBanner from "../../components/micrositee/sections/Msiteherobanner"
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
export default function Corporategifting(){
  const [data, setData] = useState({});

useEffect(() => {
  const fetchData = async () => {
    const res = await getMicrositeData("corporategifting");
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
          <MsiteHeroBanner
  details={getSection(1)}
  imagestyle={{
    width: "100%",
    aspectRatio: 360 / 564,
    resizeMode: "cover",
  }}
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
      aspectRatio:97/30,
   width:"58%"
   }}
   
  
   categorytopimgstyle={{width:"100%",
                aspectRatio:329/331
            }}
            
          

  />
  <ExploreCategories
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  />
  <ShopByPrice
   details={getSection(6)}
   titleimgstyle={{width:"100%",
                        aspectRatio:595/124}}
   
   
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
    details={getSection(8)}
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


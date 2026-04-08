import {View,Text,Image} from "react-native"
import MsiteHeroBanner from "../../components/micrositee/sections/Msiteherobanner"
import { ScrollView } from "react-native-gesture-handler"
import { useState,useEffect } from "react"
import Category from "../../components/micrositee/sections/Category"
import Popgiftcategory from "../../components/micrositee/sections/Popgiftcategory"
import BestSellers from "../../components/micrositee/sections/Bestsellers"
import ExploreCategories from "../../components/micrositee/sections/ExploreCategories"
import  ShopByPrice  from "../../components/micrositee/sections/Shopbyprice"

import LastingImpression from "../../components/micrositee/sections/LastingImpression"
import { getMicrositeData } from "../../api/micrositeApi"
import Footer from "../../components/Footer"
import { decode } from "html-entities";
export default function Houseofsilver(){
      const [hsdata, setData] = useState({});
      
      useEffect(() => {
          const fetchData = async () => {
              const data = await getMicrositeData('house-of-silver');
              if (data.msg === 'success')
                  setData(data.results);
              else
                  console.log("Message: Failure");
          }
  
          fetchData();
      }, []);
  
      const sectionData = hsdata?.SectionDetails || [];
  const getSection = (pos) =>
  sectionData.find(sec => sec.position === pos);
    
    return(
        <ScrollView style={{height:"100%",flex:1}}>
          <MsiteHeroBanner
 
details={getSection(1)}
  imagestyle={{
    width: "100%",
 
    aspectRatio: 360 / 400,
    resizeMode: "cover",
  }}
  pos={1}
/>
  <Category
   details={getSection(2)}

  imageStyle={{
    width: "100%",
    aspectRatio: 799 / 1004,   
    resizeMode: "cover",
  }}
  />
  <Popgiftcategory
   details={getSection(3)}
  />
  <BestSellers
   details={getSection(4)}
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
   
   titleimgstyle={{
      aspectRatio:97/30,
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
  images.slice(0, 4).map(item => {
    return {
      image: item.a_image,
      title: decode(item.a_title)?.toUpperCase()
    };
  })
}

  />
 
 <LastingImpression
   details={getSection(8)}
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
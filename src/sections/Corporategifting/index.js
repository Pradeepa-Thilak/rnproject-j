import {View,Text,Image} from "react-native"
import MsiteHeroBanner from "./Msiteherobanner"
import { ScrollView } from "react-native-gesture-handler"
import Category from "./Category"
import Popgiftcategory from "./Popgiftcategory"
import BestSellers from "./Bestsellers"
import ExploreCategories from "./ExploreCategories"
import  ShopByPrice  from "./Shopbyprice"
import Giftcards from "./Giftcards"
import LastingImpression from "./LastingImpression"
import Stories from "./Stories"
import Footer from "../../components/Footer"
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
/>
  <Category
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  imageStyle={{
    width: "100%",
    aspectRatio: 799 / 1002,   
    resizeMode: "cover",
  }}/>
  <Popgiftcategory
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  />
  <BestSellers
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  />
  <ExploreCategories
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  />
  <ShopByPrice
   apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"

  />
 <Giftcards/>
 <LastingImpression
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"
 />
 <Stories 
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifting&deviceType=mobile&shopId=26"
 />
  <Footer/>
        </ScrollView>
    )
}
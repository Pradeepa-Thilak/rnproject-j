import { ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import MsiteHeroBanner from '../../components/micrositee/sections/Msiteherobanner';
import BestSellers from '../../components/micrositee/sections/Bestsellers';
import Shopbyprice from '../../components/micrositee/sections/Shopbyprice';
import { decode } from 'html-entities';
import LastingImpression from '../../components/micrositee/sections/LastingImpression';
import Footer from '../Footer';
import Supportingartisans from "../../components/micrositee/sections/Supportingartisans"
export default function Dokra() {
  return (
    <ScrollView>
      <MsiteHeroBanner
        apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=dokra&deviceType=mobile&shopId=26"
        imagestyle={{
          width: '100%',
          aspectRatio: 9 / 10,
          resizeMode: 'cover',
        }}
        pos={1}
      />
      <BestSellers
        apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=dokra&deviceType=mobile&shopId=26"
        imgbguri="https://imagescdn.jaypore.com/uploads/micrositmedia/production/FINAL_Sonu_bell_3771_1731583865890.png"
        imgbgstyle={{
          width: '100%',
          aspectRatio: 1080 / 329,
        }}
        categoryconstyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -120,
        }}
        titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/FINAL_forged_in_tradition_3771_1731583653407.png"
        titleimgstyle={{
          aspectRatio: 177 / 38,
          width: '80%',
        }}
        para={
          "Dokra, a 4,500-year-old craft passed down through generations, is a testament to patience & artistry. The process begins with shaping a clay core, which is meticulously coated in layers of wax. Skilled artisans then hand-carve intricate patterns & details into the wax. Through the lost-wax technique, molten brass is poured in to take the place of the wax as it melts away. Once the metal cools, the clay mold is broken, unveiling a one-of-a-kind brass creation. Each piece reflects ancient craftsmanship & the enduring spirit of India's cultural heritage."
        }
        categorytopimg={
          'https://imagescdn.jaypore.com/uploads/micrositmedia/production/0_Forged_in_Tradition_3771_1731320781201.jpg'
        }
        categorytopimgstyle={{
          width: '100%',
          aspectRatio: 939 / 946,
        }}
        pos={4}
        transformData={images => images.slice(0, 4).map(item => item.a_image)}
      />
      <MsiteHeroBanner
        apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=dokra&deviceType=mobile&shopId=26"
        imagestyle={{
          width: '100%',
          aspectRatio: 1079 / 1652,
          resizeMode: 'cover',
        }}
        pos={5}
      />
      
      <Shopbyprice
       apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=dokra&deviceType=mobile&shopId=26"
        titleimg="https://imagescdn.jaypore.com/uploads/micrositmedia/production/Bestseller_bestseller_3771_1731583751025.png"
   titleimgstyle={{width:"100%",
                        aspectRatio:595/124}}
                         pos={6}
                           
                           transformData={(images) =>
                          images.slice(1, 6).filter(item=>item.a_title !== "Bestseller").map(item => {
                            return {
                              image: item.a_image,
                              title: decode(item.a_title)?.toUpperCase()
                            };
                          })
                        }

/>
<Supportingartisans
      apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=dokra&deviceType=mobile&shopId=26"
      position={7}/>
 <LastingImpression
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=dokra&deviceType=mobile&shopId=26"
   topIndex={1}
  bottomIndex={0}
  topitemstyle={{width:"80%",
                aspectRatio:747/119
            }}
            bottomitemstyle={{ width: "100%", height:200}}
 />
<Footer/>
      
    </ScrollView>
  );
}

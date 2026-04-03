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
      para={"RG9rcmEsIGEgNCw1MDAteWVhci1vbGQgY3JhZnQgcGFzc2VkIGRvd24gdGhyb3VnaCBnZW5lcmF0aW9ucywgaXMgYSB0ZXN0YW1lbnQgdG8gcGF0aWVuY2UgJiBhcnRpc3RyeS4gVGhlIHByb2Nlc3MgYmVnaW5zIHdpdGggc2hhcGluZyBhIGNsYXkgY29yZSwgd2hpY2ggaXMgbWV0aWN1bG91c2x5IGNvYXRlZCBpbiBsYXllcnMgb2Ygd2F4LiBTa2lsbGVkIGFydGlzYW5zIHRoZW4gaGFuZC1jYXJ2ZSBpbnRyaWNhdGUgcGF0dGVybnMgJiBkZXRhaWxzIGludG8gdGhlIHdheC4gVGhyb3VnaCB0aGUgbG9zdC13YXggdGVjaG5pcXVlLCBtb2x0ZW4gYnJhc3MgaXMgcG91cmVkIGluIHRvIHRha2UgdGhlIHBsYWNlIG9mIHRoZSB3YXggYXMgaXQgbWVsdHMgYXdheS4gT25jZSB0aGUgbWV0YWwgY29vbHMsIHRoZSBjbGF5IG1vbGQgaXMgYnJva2VuLCB1bnZlaWxpbmcgYSBvbmUtb2YtYS1raW5kIGJyYXNzIGNyZWF0aW9uLiBFYWNoIHBpZWNlIHJlZmxlY3RzIGFuY2llbnQgY3JhZnRzbWFuc2hpcCAmIHRoZSBlbmR1cmluZyBzcGlyaXQgb2YgSW5kaWEncyBjdWx0dXJhbCBoZXJpdGFnZS4="}
        categorytopimg={
          'https://imagescdn.jaypore.com/uploads/micrositmedia/production/0_Forged_in_Tradition_3771_1731320781201.jpg'
        }
        categorytopimgstyle={{
          width: '100%',
          aspectRatio: 939 / 946,
        }}
        parastyle={{ paddingBottom:20}}
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

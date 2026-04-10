import React from 'react';
import { ScrollView,Image,View } from 'react-native';
import MsiteHeroBanner from "../../components/micrositee/sections/Msiteherobanner";
import LastingImpression from "../../components/micrositee/sections/LastingImpression";
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { decode } from "html-entities";
import GridImageswithTitle from './sections/GridImageswithTitle';
import { getMicrositeData } from '../../api/micrositeApi';
import GiftGridSection from "../../components/micrositee/sections/GiftGridSection";


export default function gifts() {
    const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData("gifts");
      if (res?.msg === "success") {
        setData(res.results);
      }
    };
    fetchData();
  }, []);
  
  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) =>
    sectionData.find(sec => sec.position === pos);
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* 🔹 HERO BANNER */}
      <MsiteHeroBanner
        details={getSection(1)}
        imagestyle={{
          width: "100%",
          aspectRatio: 420 / 551,
          resizeMode: "cover",
        }}
        
      />
      <GridImageswithTitle          
                                  details={getSection(2)}
                                  spacing={20}
                                  showTitle={false}
                                  SectionName={false}
                                  itemWidth="47%"   
                                   imageStyle={{
                          width:"85%",
                          aspectRatio:1/1,  
                       }}
                       style={{  
   marginHorizontal: 75,
    marginTop: 24,
  }}/>
        <GiftGridSection details={getSection(3)}/>     
        <GridImageswithTitle
        details={getSection(4)}
         imageStyle={{
                          width:"100%",
                          aspectRatio:87/101,
                          
                       }}
                       style={{paddingHorizontal:10,
                        paddingBottom:30
                       }}

        />
        <View style={{justifyContent: 'center',flexDirection: 'row',  width: '100%'}}>
        <Image
            source={{ uri: "https://assets.abfrlcdn.com/img/app/brands/tasva/gift_assets/mobile/Group%207143.png" }}
            style={{ width: 142, height: 20,  }}
        />
            </View> 

      {/* 🔹 LAST SECTION (VIDEO) */}
      <LastingImpression
        details={getSection(5)}
      
        bottomIndex={0}
       topitemstyle={{width:"100%",
                aspectRatio:1080/101
            }}
            bottomitemstyle={{ width: "100%", aspectRatio: 396 / 235 }}
      />
      <Footer />
    </ScrollView>
  );
}
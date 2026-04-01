import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ShopByCategory from './sections/ShopByCategory';
import SeasonsFavorites from './sections/SeasonsFavorites';
import WearYourRoots from './sections/WearYourRoots';

import HalfBannerCard from './sections/HalfBannerCard';
import FeaturedCollections from './sections/FeaturedCollections';
import ShopByBrand from './sections/ShopByBrand';
import NewIn from './sections/NewIn';
import Msiteherobanner from './sections/Msiteherobanner';

const EossScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      <Msiteherobanner
      pos={1}
  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"
  imagestyle={{
    width:"100%",
     aspectRatio: 90 / 83,
    resizeMode: "cover",
  }}/>
     <ShopByCategory
  position={3}
  api="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"
/>
      <SeasonsFavorites position={4} 
      api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
      <WearYourRoots 
      position={5} 
      api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
       <SeasonsFavorites position={6} 
         api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
      
      <WearYourRoots 
      position={7} 
      api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
      <SeasonsFavorites position={8}
        api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
      <WearYourRoots 
      position={9} 
      api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
      <SeasonsFavorites position={10}
        api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"} />
      <WearYourRoots 
      position={11} 
      api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
     <SeasonsFavorites position={12} 
       api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"} />
      <WearYourRoots 
      position={13} 
      api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
      <SeasonsFavorites position={14}  
        api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
    <WearYourRoots 
      position={15} 
      api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
       <SeasonsFavorites position={16} 
         api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"} />
     <HalfBannerCard
  positions={[17, 18]}
  api="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"
/>
      <FeaturedCollections position={20} 
         api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"} />
      <ShopByBrand position={21} 
         api={"https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=eoss&deviceType=mobile&shopId=26"}/>
      <NewIn />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default EossScreen;
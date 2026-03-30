import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HeroBanner from '../../components/Microsite/HeroBanner';
import ShopByCategory from '../../components/Microsite/ShopByCategory';
import SeasonsFavorites from '../../components/Microsite/SeasonsFavorites';
import WearYourRoots from '../../components/Microsite/WearYourRoots';
import ThumbnailCarousel1 from '../../components/Microsite/ThumbnailCarousel1';
import SummerHome from '../../components/Microsite/SummerHome';
import ThumbnailCarousel2 from '../../components/Microsite/ThumbnailCarousel2';
import ModernHeirlooms from '../../components/Microsite/ModernHeirlooms';
import ThumbnailCarousel3 from '../../components/Microsite/ThumbnailCarousel3';
import RootedMan from '../../components/Microsite/RootedMan';
import ThumbnailCarousel4 from '../../components/Microsite/ThumbnailCarousel4';
import DrapedInHeritage from '../../components/Microsite/DrapedInHeritage';
import ThumbnailCarousel5 from '../../components/Microsite/ThumbnailCarousel5';
import CraftedToGo from '../../components/Microsite/CraftedToGo';
import ThumbnailCarousel6 from '../../components/Microsite/ThumbnailCarousel6';
import HalfBannerCard from '../../components/Microsite/HalfBannerCard';
import FeaturedCollections from '../../components/Microsite/FeaturedCollections';
import ShopByBrand from '../../components/Microsite/ShopByBrand';
import NewIn from '../../components/Microsite/NewIn';

const EossScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      <HeroBanner />
      <ShopByCategory />
      <SeasonsFavorites />
      <WearYourRoots />
      <ThumbnailCarousel1 />
      <SummerHome />
      <ThumbnailCarousel2 />
      <ModernHeirlooms />
      <ThumbnailCarousel3 />
      <RootedMan />
      <ThumbnailCarousel4 />
      <DrapedInHeritage />
      <ThumbnailCarousel5 />
      <CraftedToGo />
      <ThumbnailCarousel6 />
      <HalfBannerCard />
      <FeaturedCollections />
      <ShopByBrand />
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
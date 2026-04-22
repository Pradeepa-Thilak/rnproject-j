import React from 'react';
import { ScrollView } from 'react-native';
import HeroBanner from '../../components/HomePage/HeroBanner';
import ShopByBudgetSection from '../../components/CLPpage/ShopByBudget';
import ShopByOccasionSection from '../../components/CLPpage/ShopByOccasion';
import ShopByCollectionSection from '../../components/CLPpage/ShopByCollection';
import ShopByCurationSection from '../../components/CLPpage/ShopByCurationSection';
import StripBananer from '../../components/CLPpage/StripBanner';
import NewArrivalsSection from '../../components/CLPpage/NewArrivals';
import BestSellerSection from '../../components/CLPpage/BestSellerSection';
import ShopByCategorySection from '../../components/CLPpage/ShopByCategorySection';
import { CLPImg } from '../../lib/ConstData';

const CLP = () => {
  return (
    <ScrollView>
      <HeroBanner clpData={CLPImg} isHome={false} aspectRatio={360 / 332} />
      <StripBananer />
      <NewArrivalsSection />
      <ShopByCategorySection />
      <ShopByCurationSection />
      <BestSellerSection />
      <ShopByBudgetSection />
      <ShopByOccasionSection />
      <ShopByCollectionSection />
    </ScrollView>
  );
};
export default CLP;
